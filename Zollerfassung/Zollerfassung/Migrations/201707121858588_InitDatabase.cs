namespace Zollerfassung.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitDatabase : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Gasart",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Zollerfassung",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        LIEF_NR = c.String(),
                        Kennzeichen = c.String(),
                        DAT_Zugang = c.DateTime(nullable: false),
                        DAT_Abgang = c.DateTime(nullable: false),
                        Menge = c.Int(nullable: false),
                        Bemerkung = c.String(),
                        Gasart_ID = c.Int(),
                        Herkunft_ID = c.Int(),
                        Lieferant_ID = c.Int(),
                        Spediteur_ID = c.Int(),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Gasart", t => t.Gasart_ID)
                .ForeignKey("dbo.Herkunft", t => t.Herkunft_ID)
                .ForeignKey("dbo.Lieferant", t => t.Lieferant_ID)
                .ForeignKey("dbo.Spediteur", t => t.Spediteur_ID)
                .Index(t => t.Gasart_ID)
                .Index(t => t.Herkunft_ID)
                .Index(t => t.Lieferant_ID)
                .Index(t => t.Spediteur_ID);
            
            CreateTable(
                "dbo.Herkunft",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Lieferant",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Spediteur",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Zollerfassung", "Spediteur_ID", "dbo.Spediteur");
            DropForeignKey("dbo.Zollerfassung", "Lieferant_ID", "dbo.Lieferant");
            DropForeignKey("dbo.Zollerfassung", "Herkunft_ID", "dbo.Herkunft");
            DropForeignKey("dbo.Zollerfassung", "Gasart_ID", "dbo.Gasart");
            DropIndex("dbo.Zollerfassung", new[] { "Spediteur_ID" });
            DropIndex("dbo.Zollerfassung", new[] { "Lieferant_ID" });
            DropIndex("dbo.Zollerfassung", new[] { "Herkunft_ID" });
            DropIndex("dbo.Zollerfassung", new[] { "Gasart_ID" });
            DropTable("dbo.Spediteur");
            DropTable("dbo.Lieferant");
            DropTable("dbo.Herkunft");
            DropTable("dbo.Zollerfassung");
            DropTable("dbo.Gasart");
        }
    }
}
