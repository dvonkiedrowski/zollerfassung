namespace Zollerfassung.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class WeitereFelderUndTabellen : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Mandant",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Steuer",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Steuersatz = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            AddColumn("dbo.Zollerfassung", "EK_Preis", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.Zollerfassung", "Einheit", c => c.String());
            AddColumn("dbo.Zollerfassung", "Temperatur", c => c.Int(nullable: false));
            AddColumn("dbo.Lieferant", "OlgaId", c => c.Int());
            AddColumn("dbo.Lieferant", "HandelId", c => c.Int());
            AddColumn("dbo.Lieferant", "IstIntern", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Lieferant", "IstIntern");
            DropColumn("dbo.Lieferant", "HandelId");
            DropColumn("dbo.Lieferant", "OlgaId");
            DropColumn("dbo.Zollerfassung", "Temperatur");
            DropColumn("dbo.Zollerfassung", "Einheit");
            DropColumn("dbo.Zollerfassung", "EK_Preis");
            DropTable("dbo.Steuer");
            DropTable("dbo.Mandant");
        }
    }
}
