using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;
using System.Data.Entity;
using Zollerfassung.Models;
using AutoMapper;
using Zollerfassung.ViewModels;

namespace Zollerfassung
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            // Code, der beim Anwendungsstart ausgeführt wird
            Mapper.Initialize(cfg => {
                cfg.CreateMap<Models.Zollerfassung, ZollerfassungDto>();
                cfg.CreateMap<ZollerfassungDto, Models.Zollerfassung>();
                cfg.CreateMap<Spediteur, BaseDtoWithName>();
                cfg.CreateMap<Herkunft, BaseDtoWithName>();
                cfg.CreateMap<Lieferant, BaseDtoWithName>();
                cfg.CreateMap<Gasart, BaseDtoWithName>();
                cfg.CreateMap<BaseDtoWithName, Spediteur>();
                cfg.CreateMap<BaseDtoWithName, Herkunft>();
                cfg.CreateMap<BaseDtoWithName, Lieferant>();
                cfg.CreateMap<BaseDtoWithName, Gasart>();
            });

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            Database.SetInitializer(new CreateDatabaseIfNotExists<ZollerfassungDbContext>());
        }
    }
}