using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Zollerfassung.Models.Base
{
    public class BaseTenantEntity : BaseEntity
    {
        [Required]
        public int TenantID { get; set; }

        [ForeignKey("TenantID")]
        public virtual Mandant Mandant { get; set; }
    }
}