using System;
using Zollerfassung.ViewModels.Base;

namespace Zollerfassung.ViewModels
{
    public class ZollerfassungDto : BaseDto
    {
        public string LIEF_NR { get; set; }

        public string Kennzeichen { get; set; }

        public DateTime DAT_Zugang { get; set; }

        public DateTime? DAT_Abgang { get; set; }

        public int Menge { get; set; }

        public string Bemerkung { get; set; }

        public string SpediteurName { get; set; }

        public string HerkunftName { get; set; }

        public string GasartName { get; set; }

        public string LieferantName { get; set; }
    }
}