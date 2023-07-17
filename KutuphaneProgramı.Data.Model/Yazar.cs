using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KutuphaneProgramı.Data.Model
{
    public class Yazar : BaseEntity
    {
        [Required] //kategori adını zorunlu kılar zorunlu 
        [Column(TypeName = "varchar")]
        [MaxLength(50)]
        public string MyProperty { get; set; }
        public virtual List<Kitap> Kitaplar { get; set; }

    }
}
