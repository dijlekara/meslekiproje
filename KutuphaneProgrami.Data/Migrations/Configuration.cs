namespace KutuphaneProgrami.Data.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<KutuphaneProgrami.Data.Context>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
            ContextKey = "KutuphaneProgrami.Data.Context";
        }

        protected override void Seed(KutuphaneProgrami.Data.Context context)
        {
        }
    }
}
