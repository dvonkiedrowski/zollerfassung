using System;
using System.Collections.Generic;

namespace Zollerfassung.ViewModels
{
    public class MandantDto
    {
        public IEnumerable<BaseDtoWithName> Mandanten { get; set; }

        public BaseDtoWithName SelectedMandant { get; set; }
    }
}