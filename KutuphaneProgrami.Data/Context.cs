using KutuphaneProgrami.Data.Migrations;
using KutuphaneProgramı.Data.Model;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace KutuphaneProgrami.Data
{
    public class Context : DbContext
    {
        public Context():base("Context")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<Context, Configuration>("Context"));
        }
        public DbSet<Kategori> Kategoriler { get; set; }
        public DbSet<Kitap> Kitaplar { get; set; }
        public DbSet<OduncKitap> oduncKitaplar { get; set; }
        public DbSet<Uye> Uyeler { get; set; }
        public DbSet<Yazar> Yazarlar { get; set; }
        //public List<Kategori> Kategoriler { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // sql de s takısını kaldırmak için 
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }

    }
}
