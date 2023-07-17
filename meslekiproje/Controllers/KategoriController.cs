using KutuphaneProgramı.Data.Model;
using KutuphaneProgrami.Data.UnitOfWork;
using System.Web.Mvc;

namespace meslekiproje.Controllers
{
   
    public class KategoriController : Controller
    {
        UnitOfWork unitOfWork;

        public KategoriController()
        {
            unitOfWork = new UnitOfWork();
        }
        public ActionResult Index()
        {
            var kategoriler = unitOfWork.GetRepository<Kategori>().GetAll();
            
            return View(kategoriler);
        }
        //Kategori ekleme
        [HttpPost]
        public JsonResult EkleJson(string ktgAd)
        {
            Kategori ktgri = new Kategori();
            ktgri.Ad = ktgAd;
            var eklenenKtg = unitOfWork.GetRepository<Kategori>().Add(ktgri);
            unitOfWork.SaveChanges();
            return Json(
                new
                {
                    Result = new
                    {
                        Id = eklenenKtg.Id,
                        Ad = eklenenKtg.Ad
                    }, JsonRequestBehavior.AllowGet
                }
                ); 
        }
        //Kategori güncelleme
        [HttpPost]
        public JsonResult GuncelleJson(int ktgId, string ktgAd)
        {
            var kategori = unitOfWork.GetRepository<Kategori>().GetById(ktgId);
            kategori.Ad = ktgAd;
            var durum =  unitOfWork.SaveChanges();
            if (durum > 0) return Json("1");
            return Json("0");
        }
        //Kategori silme 
        [HttpPost]
        public JsonResult SilJson(int ktgId)
        {
            unitOfWork.GetRepository<Kategori>().Delete(ktgId);
            var durum = unitOfWork.SaveChanges();
            if (durum > 0) return Json("1");
            return Json("0");
        }
    }
}