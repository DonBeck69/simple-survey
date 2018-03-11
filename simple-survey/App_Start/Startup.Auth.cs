
using System;
using Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OpenIdConnect;
using System.Configuration;
using System.IdentityModel.Tokens;
using System.Globalization;
using System.Security.Claims;
using Microsoft.Owin.Security.Notifications;
using System.Threading.Tasks;
using System.Web;
using Microsoft.IdentityModel.Protocols;


namespace MobilityMaturityWebApp
{
    public partial class Startup
    {

        public static string PublicClientId { get; private set; }

        //private static string clientId = ConfigurationManager.AppSettings["ida:ClientId"];
        //private static string aadInstance = ConfigurationManager.AppSettings["ida:AADInstance"];
        //private static string tenant = ConfigurationManager.AppSettings["ida:Tenant"];
        //private static string clientrealm = ConfigurationManager.AppSettings["AADClientRealm"];
        //private static string appKey = ConfigurationManager.AppSettings["ida:AppKey"];
        //public static readonly string Authority = String.Format(CultureInfo.InvariantCulture, aadInstance, tenant);


        public void ConfigureAuth(IAppBuilder app)
        {
#if !DEBUG
            //var ConfigurationProvider = UnityConfig.Container.Resolve<IConfigurationProvider>();
            //var LoggingProvider = UnityConfig.Container.Resolve<ILoggingProvider>();

            // This is the resource ID of the AAD Graph API.  We'll need this to request a token to call the Graph API.
            //string graphResourceId = ConfigurationManager.AppSettings["AADGraphResourceId"];

            app.SetDefaultSignInAsAuthenticationType(CookieAuthenticationDefaults.AuthenticationType);
            app.UseCookieAuthentication(
                new CookieAuthenticationOptions
                {
                    CookieName = "WebAuthCookie",
                    SlidingExpiration = true,
                    ExpireTimeSpan = TimeSpan.FromDays(1)
                });

            app.UseOpenIdConnectAuthentication(
                new OpenIdConnectAuthenticationOptions
                {
                    ClientId = clientId,
                    Authority = Authority,
                    PostLogoutRedirectUri = clientrealm,
                    RedirectUri = clientrealm,
                    //TokenValidationParameters = new TokenValidationParameters()
                    //{
                    //    SaveSigninToken = true,
                    //    ValidateIssuer = false,
                    //    RoleClaimType = "roles"
                    //},
                    Notifications = new OpenIdConnectAuthenticationNotifications()
                    {
                        //AuthorizationCodeReceived = OnAuthorizationCodeReceived,
                        AuthenticationFailed = OnAuthenticationFailed,
                    }
                });


            app.Use((context, next) =>
            {
                if (HttpContext.Current == null)
                {
                    return next.Invoke();
                }
                if (!HttpContext.Current.Request.IsAuthenticated)
                {
                    context.Authentication.Challenge(new AuthenticationProperties { RedirectUri = HttpContext.Current.Request.Url.PathAndQuery.ToString() }, OpenIdConnectAuthenticationDefaults.AuthenticationType);
                    return Task.FromResult(0);
                }
                else
                {
                    var propertyBag = HttpContext.Current.Request.Headers;
                    if (propertyBag["Token"] == null || (propertyBag["Token"] != null && string.IsNullOrEmpty(propertyBag["Token"])))
                    {
                        string authHeader = context.Request.Headers["Authorization"];
                        var ocliamIdentity = (System.Security.Claims.ClaimsIdentity)ClaimsPrincipal.Current.Identity;
                        string token = string.Empty;
                        if (ocliamIdentity != null && ocliamIdentity.BootstrapContext != null)
                        {
                            token = ((System.IdentityModel.Tokens.BootstrapContext)(ocliamIdentity.BootstrapContext)).Token;
                        }

                        if (!string.IsNullOrEmpty(authHeader) && authHeader.IndexOf("Bearer") >= 0)
                        {
                            //Bearer Auth
                            token = authHeader.Substring(7);//Bearer<space> :7 characters
                        }
                        if (token != null)
                        {
                            ocliamIdentity.AddClaim(new Claim(ClaimTypes.UserData, token));
                        }
                    }
                }

                return next.Invoke();
            });

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
#endif
        }

        private Task OnAuthenticationFailed(AuthenticationFailedNotification<OpenIdConnectMessage, OpenIdConnectAuthenticationOptions> context)
        {
            context.HandleResponse();
            context.Response.Redirect("/Home/Error?message=" + context.Exception.Message);
            return Task.FromResult(0);
        }

        //private async Task OnAuthorizationCodeReceived(AuthorizationCodeReceivedNotification context)
        //{
        //    var code = context.Code;


        //    ClientCredential credential = new ClientCredential(clientId, appKey);
        //    string userObjectID = context.AuthenticationTicket.Identity.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier").Value;
        //    Microsoft.IdentityModel.Clients.ActiveDirectory.AuthenticationContext authContext = new Microsoft.IdentityModel.Clients.ActiveDirectory.AuthenticationContext(Authority);//, new NaiveSessionCache(userObjectID)

        //    // If you create the redirectUri this way, it will contain a trailing slash.  
        //    // Make sure you've registered the same exact Uri in the Azure Portal (including the slash).
        //    Uri uri = new Uri(HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Path));
        //    AuthenticationResult result = await authContext.AcquireTokenByAuthorizationCodeAsync(code, uri, credential, graphResourceId);//
        //}
    }
}