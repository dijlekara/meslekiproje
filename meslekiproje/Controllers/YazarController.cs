using KutuphaneProgramı.Data.Model;
using KutuphaneProgrami.Data.UnitOfWork;
using System.Web.Mvc;

namespace meslekiproje.Controllers
{
   
    public class YazarController : Controller
    {
        UnitOfWork unitOfWork;

        public YazarController()
        {
            unitOfWork = new UnitOfWork();
        }
        public ActionResult Index()
        {
            var yazarlar = unitOfWork.GetRepository<Yazar>().GetAll();
            return View(yazarlar);
        }

        [HttpPost]
        public JsonResult EkleJson(string yzrMyProperty)
        {
           Yazar yazar = new Yazar();
            yazar.MyProperty = yzrMyProperty;
            var eklenenYazar = unitOfWork.GetRepository<Yazar>().Add(yazar);
            unitOfWork.SaveChanges();
            return Json(
                new
                {
                    Result = new
                    {
                        Id = eklenenYazar.Id,
                        Ad = eklenenYazar.MyProperty
                    },
                    JsonRequestBehavior.AllowGet
                }
                );
        }
        //Yazar Silme
        [HttpPost]
        public JsonResult SilJson(int yazarId)
        {
            unitOfWork.GetRepository<Yazar>().Delete(yazarId);
            var durum = unitOfWork.SaveChanges();
            if (durum > 0) return Json("1");
            return Json("0");
        }

        //Yazar Güncelleme
        [HttpPost]
        public JsonResult GuncelleJson(int yzrId, string yzrMyProperty)
        {
            var yazar = unitOfWork.GetRepository<Yazar>().GetById(yzrId);
            yazar.MyProperty = yzrMyProperty;
            var durum = unitOfWork.SaveChanges();
            if (durum > 0) return Json("1");
            return Json("0");
        }
    }
}