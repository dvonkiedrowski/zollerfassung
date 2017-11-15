﻿using System;
using Zollerfassung.Models.Base;

namespace Zollerfassung.Models
{
    public class Zollerfassung : BaseTenantEntity
    {
        public string LIEF_NR { get; set; }

        public string Kennzeichen { get; set; }

        public DateTime DAT_Zugang { get; set; }

        public DateTime? DAT_Abgang { get; set; }

        public int Menge { get; set; }

        public string Bemerkung { get; set; }

        public bool Storniert { get; set; }

        public decimal EK_Preis { get; set; }

        public string Einheit { get; set; }

        public int Temperatur { get; set; }

        public virtual Spediteur Spediteur { get; set; }

        public virtual Herkunft Herkunft { get; set; }

        public virtual Gasart Gasart { get; set; }

        public virtual Lieferant Lieferant { get; set; }

        public Zollerfassung()
        {
            this.Temperatur = 12;
        }
    }
}