using System;
using System.Collections.Generic;
using Zollerfassung.Models.Base;

namespace Zollerfassung.Models
{
    public class Spediteur : BaseEntityWithName
    {
        public virtual ICollection<Zollerfassung> Zollerfassung { get; set; }
    }
}