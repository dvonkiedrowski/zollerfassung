using System;
using System.Web.Mvc;
using Zollerfassung.Models;

namespace Zollerfassung.Controllers
{
    public class ZollerfassungController : Controller
    {
        public ActionResult Index()
        {
            ZollerfassungDbContext context = new ZollerfassungDbContext();
            return View(context.Zollerfassung);
        }
    }
}