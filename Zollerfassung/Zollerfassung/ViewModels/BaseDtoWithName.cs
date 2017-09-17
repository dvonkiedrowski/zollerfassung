using System;
using Zollerfassung.ViewModels.Base;

namespace Zollerfassung.ViewModels
{
    public class BaseDtoWithName : BaseDto
    {
        public string Name { get; set; }
    }
}