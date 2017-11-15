using System;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;

namespace Zollerfassung.Models
{
    public class ZollerfassungDbContext : DbContext
    {
        public int? TenantID { get; set; }

        public ZollerfassungDbContext()
        {
            // activate tenant filter
            this.TenantID = this.Mandant.FirstOrDefault()?.ID;
        }

        public DbSet<Herkunft> Herkunft { get; set; }

        public DbSet<Lieferant> Lieferant { get; set; }

        public DbSet<Gasart> Gasart { get; set; }

        public DbSet<Spediteur> Spediteur { get; set; }

        public DbSet<Zollerfassung> Zollerfassung { get; set; }

        public DbSet<Mandant> Mandant { get; set; }

        public DbSet<Steuer> Steuer { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}