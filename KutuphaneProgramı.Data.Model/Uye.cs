using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KutuphaneProgramı.Data.Model
{
   public class Uye : BaseEntity
    {
        [Required] //kategori adını zorunlu kılar zorunlu 
        [Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string Ad { get; set; }

        [Required]
        [Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string Soyad { get; set; }


        [Column(TypeName = "char")]
        [MaxLength(11), MinLength(11)]
        public string Tc { get; set; }

        [Column(TypeName = "char")]
        [MaxLength(11), MinLength(11)]
        public string Tel { get; set; }

        [Required]
        public DateTime KayıtTarihi { get; set; }

        [Column(TypeName = "nvarchar")]
        [MaxLength(100)]
        public string Mail { get; set; }


        [Column(TypeName = "char")]
        [MaxLength(32), MinLength(32)]
        public string Sifre { get; set; }

        [Required]
        public int Ceza { get; set; }

       
        [Column(TypeName = "char")]
        [MaxLength(1), MinLength(1)]
        public string Yetki { get; set; }
        public virtual List<OduncKitap> OduncKitaplar { get; set; }           

    }
}
