using System;
using System.Collections.Generic;
using Zollerfassung.Models.Base;

namespace Zollerfassung.Models
{
    public class Lieferant : BaseEntityWithName
    {
        public virtual ICollection<Zollerfassung> Zollerfassung { get; set; }

        public int? OlgaId { get; set; }

        public int? HandelId { get; set; }

        public bool IstIntern { get; set; }
    }
}