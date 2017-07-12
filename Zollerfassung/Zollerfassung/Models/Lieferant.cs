using System;
using System.Collections.Generic;
using Zollerfassung.Models.Base;

namespace Zollerfassung.Models
{
    public class Lieferant : BaseEntityWithName
    {
        public virtual ICollection<Zollerfassung> Zollerfassung { get; set; }
    }
}