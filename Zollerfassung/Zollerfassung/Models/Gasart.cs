﻿using System;
using System.Collections.Generic;
using Zollerfassung.Models.Base;

namespace Zollerfassung.Models
{
    public class Gasart : BaseEntityWithName
    {
        public virtual ICollection<Zollerfassung> Zollerfassung { get; set; }
    }
}