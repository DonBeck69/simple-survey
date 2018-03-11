using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MobilityMaturityWebApp
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.EnableCors();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}/{search}",
                defaults: new { id = RouteParameter.Optional, search = RouteParameter.Optional }
            );
        }
    }
}
