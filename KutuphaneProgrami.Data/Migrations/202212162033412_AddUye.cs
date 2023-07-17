namespace KutuphaneProgrami.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUye : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Uye", "Mail", c => c.String(maxLength: 100));
            AddColumn("dbo.Uye", "Sifre", c => c.String(maxLength: 32, fixedLength: true, unicode: false));
            AddColumn("dbo.Uye", "Yetki", c => c.String(maxLength: 1, fixedLength: true, unicode: false));

        }
        
        public override void Down()
        {
            DropColumn("dbo.Uye", "Yetki");
            DropColumn("dbo.Uye", "Sifre");
            DropColumn("dbo.Uye", "Mail");
        }
    }
}
