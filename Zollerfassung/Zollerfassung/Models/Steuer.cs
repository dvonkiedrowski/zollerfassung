using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Zollerfassung.Models.Base;

namespace Zollerfassung.Models
{
    public class Steuer : BaseEntityWithName
    {
        public decimal Steuersatz { get; set; }
    }
}