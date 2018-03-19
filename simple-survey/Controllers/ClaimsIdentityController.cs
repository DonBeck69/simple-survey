using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
//using DmmDataAccess;

namespace SimpleSurvey
{
    [RoutePrefix("api")]
    [NotImplExceptionFilter]
#if !DEBUG
    [Authorize]
#endif
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ClaimsIdentityController : ApiController
    {
        public Dictionary<string, string> Get()
        {
            Dictionary<string, string> ret = new Dictionary<string, string>();
            try
            {
#if !DEBUG
                ClaimsIdentity claimsIdentity = (ClaimsIdentity)ClaimsPrincipal.Current.Identity;
                //not sure the claims will always be in the same order etc. so, search for type "name"
                ret["name"] = claimsIdentity.Claims.ToList().Find(c => c.Type == "name").Value;

                //there is a difference in claims identity data between corp microsoft account and live accounts... 
                //the actual email address used by the DA needs to be found in claims
                //a corp microsoft account will have the email / alias as expected in claims identity name
                var alias = claimsIdentity.Claims.ToList().FindAll(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress").FirstOrDefault();
                if (alias == null)
                {
                    ret["alias"] = claimsIdentity.Name;
                }
                // Phil: Donovan had this commented out, but then it results in javascript errors which are not checking if the alias value is null!!!!
                else
                {
                    ret["alias"] = claimsIdentity.Claims.ToList().Find(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress").Value;
                }

                ret["UserClaimsId"] = claimsIdentity.Claims.ToList().Find(c => c.Type == "http://schemas.microsoft.com/identity/claims/objectidentifier").Value;
                ret["token"] = claimsIdentity.Claims.ToList().Find(c => c.Type == "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata").Value;

                // Phil Brock - In debugging, a Customer authenticated via a live id doesn't necessarily have a givenname or surname
                var givenname = claimsIdentity.Claims.ToList().FindAll(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname").FirstOrDefault();
                if (givenname == null)
                {
                    ret["givenname"] = ret["name"];
                }
                else
                {
                    ret["givenname"] = claimsIdentity.Claims.ToList().Find(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname").Value;
                }
                var surname = claimsIdentity.Claims.ToList().FindAll(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname").FirstOrDefault();
                if( surname == null )
                {
                    ret["surname"] = ret["name"];
                }
                else
                {
                    ret["surname"] = claimsIdentity.Claims.ToList().Find(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname").Value;
                }
                //ret["givenname"] = claimsIdentity.Claims.ToList().Find(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname").Value;
                //ret["surname"] = claimsIdentity.Claims.ToList().Find(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname").Value;
#else

                ret.Add("alias", "fred.theman@indigoslate.com");  //TESTING IN DA
                ret.Add("token", "Boo!");
                ret.Add("givenname", "Fred");
                ret.Add("surname", "Theman");
                ret.Add("UserClaimsId", "db798224-223c-4d04-ba78-ff4a83510490");

#endif
            }
            catch (Exception ex)
            {
                HttpResponseMessage resp = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    Content = new StringContent(ex.ToString()),
                    ReasonPhrase = ex.Message.ToString()
                };
                throw new HttpResponseException(resp);
            }
            return ret;
        }

    }
}