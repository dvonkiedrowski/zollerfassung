namespace Zollerfassung.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DATAbgangNullable : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Zollerfassung", "DAT_Abgang", c => c.DateTime());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Zollerfassung", "DAT_Abgang", c => c.DateTime(nullable: false));
        }
    }
}
