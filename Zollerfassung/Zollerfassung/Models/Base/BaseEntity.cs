using System;
using System.ComponentModel.DataAnnotations;

namespace Zollerfassung.Models.Base
{
    public class BaseEntity
    {
        [Key]
        public int ID { get; set; }
    }
}