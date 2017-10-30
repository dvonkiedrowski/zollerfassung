﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Zollerfassung
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            // This need to stay deactivated for the Angular2 router mapping
            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Zollerfassung", action = "Index", id = UrlParameter.Optional }
            //);

            // This maps every request to the only MVC Controller
            // All other routing is done in Angular2 router
            routes.MapRoute(
                name: "Angular",
                url: "{*url}",
                defaults: new { controller = "Zollerfassung", action = "Index" }
            );
        }
    }
}
