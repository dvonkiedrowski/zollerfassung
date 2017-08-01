namespace Zollerfassung.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Zollerfassung.Models.ZollerfassungDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Zollerfassung.Models.ZollerfassungDbContext context)
        {
            if (!context.Gasart.Any())
            {
                var butan = context.Gasart.Add(new Models.Gasart { Name = "Butan", ID = 1 });
                var propan = context.Gasart.Add(new Models.Gasart { Name = "Propan", ID = 2 });

                if (!context.Herkunft.Any())
                {
                    var ha = context.Herkunft.Add(new Models.Herkunft { ID = 1, Name = "H-A" });
                    var hb = context.Herkunft.Add(new Models.Herkunft { ID = 2, Name = "H-B" });

                    if (!context.Lieferant.Any())
                    {
                        var la = context.Lieferant.Add(new Models.Lieferant { ID = 1, Name = "Lieferant A" });
                        var lb = context.Lieferant.Add(new Models.Lieferant { ID = 2, Name = "Lieferant B" });

                        if (!context.Spediteur.Any())
                        {
                            var speda = context.Spediteur.Add(new Models.Spediteur { ID = 1, Name = "Sped-A" });
                            var spedb = context.Spediteur.Add(new Models.Spediteur { ID = 2, Name = "Sped-B" });

                            if (!context.Zollerfassung.Any())
                            {
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 1, Bemerkung = "Test-A", DAT_Abgang = DateTime.Now, DAT_Zugang = DateTime.Now.AddMonths(-3), Gasart = butan, Herkunft = ha, Lieferant = lb, Menge = 300, Spediteur = spedb, LIEF_NR = "101-abc" });
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 2, Bemerkung = "Test-B", DAT_Abgang = DateTime.Now.AddMonths(-1), DAT_Zugang = DateTime.Now.AddMonths(-5), Gasart = propan, Herkunft = ha, Lieferant = lb, Kennzeichen = "Kenn-G", Menge = 100, Spediteur = speda, LIEF_NR = "100-abc" });
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 3, Bemerkung = "Test-C", DAT_Zugang = DateTime.Now.AddMonths(-2), Gasart = butan, Herkunft = ha, Lieferant = la, Menge = 150, Spediteur = spedb, LIEF_NR = "100-def" });
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 4, Bemerkung = "Test-D", DAT_Abgang = DateTime.Now.AddDays(-15), DAT_Zugang = DateTime.Now.AddMonths(-3), Gasart = butan, Herkunft = hb, Lieferant = lb, Kennzeichen = "Kenn-C", Menge = 400, Spediteur = speda, LIEF_NR = "100-abc" });
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 5, Bemerkung = "Test-E", DAT_Abgang = DateTime.Now, DAT_Zugang = DateTime.Now.AddMonths(-4), Gasart = propan, Herkunft = hb, Lieferant = la, Kennzeichen = "Kenn-B", Menge = 200, Spediteur = speda, LIEF_NR = "100-abc" });
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 6, Bemerkung = "Test-F", DAT_Abgang = DateTime.Now, DAT_Zugang = DateTime.Now.AddMonths(-6), Gasart = propan, Herkunft = ha, Lieferant = la, Kennzeichen = "Kenn-E", Menge = 200, Spediteur = speda, LIEF_NR = "100-abc" });
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 7, Bemerkung = "Test-G", DAT_Abgang = DateTime.Now.AddDays(-25), DAT_Zugang = DateTime.Now.AddMonths(-7), Gasart = butan, Herkunft = ha, Lieferant = lb, Menge = 50, Spediteur = speda, LIEF_NR = "200-abc" });
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 8, Bemerkung = "Test-H", DAT_Abgang = DateTime.Now, DAT_Zugang = DateTime.Now.AddMonths(-3), Gasart = butan, Herkunft = ha, Lieferant = la, Kennzeichen = "Kenn-D", Menge = 500, Spediteur = speda, LIEF_NR = "100-abc" });
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 9, Bemerkung = "Test-I", DAT_Abgang = DateTime.Now.AddDays(-10), DAT_Zugang = DateTime.Now.AddMonths(-1), Gasart = butan, Herkunft = hb, Lieferant = la, Kennzeichen = "Kenn-F", Menge = 100, Spediteur = speda, LIEF_NR = "100-abc" });
                                context.Zollerfassung.Add(new Models.Zollerfassung { ID = 10, Bemerkung = "Test-J", DAT_Zugang = DateTime.Now, Gasart = propan, Herkunft = hb, Lieferant = la, Kennzeichen = "Kenn-A", Menge = 1000, Spediteur = spedb, LIEF_NR = "300-abc" });
                            }
                        }
                    }
                }
            }

            context.SaveChanges();
        }
    }
}
