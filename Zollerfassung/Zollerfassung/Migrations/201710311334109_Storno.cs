namespace Zollerfassung.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Storno : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Zollerfassung", "Storniert", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Zollerfassung", "Storniert");
        }
    }
}
