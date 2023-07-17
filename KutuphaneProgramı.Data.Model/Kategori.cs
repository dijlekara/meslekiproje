using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KutuphaneProgramı.Data.Model
{
    public class Kategori : BaseEntity
    {
        [Required] //kategori adını zorunlu kılar zorunlu 
        [Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string Ad { get; set; }
        public virtual List<Kitap> Kitaplar { get; set; }
    }
}
