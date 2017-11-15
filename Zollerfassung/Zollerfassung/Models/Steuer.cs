using System;
using Zollerfassung.Models.Base;

namespace Zollerfassung.Models
{
    public class Steuer : BaseEntityWithName
    {
        public decimal Steuersatz { get; set; }
    }
}