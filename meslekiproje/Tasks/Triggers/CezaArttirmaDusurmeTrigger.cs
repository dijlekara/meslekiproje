using meslekiproje.Tasks.Jobs;
using Quartz;
using Quartz.Impl;

namespace meslekiproje.Tasks.Triggers
{
    public class CezaArttirmaDusurmeTrigger
    {
        public static void Baslat()
        {
            //Zamanlayıcı Oluşturuyoruz.
            IScheduler zamanlayici = StdSchedulerFactory.GetDefaultScheduler();
            //Zamanlayıcı Çalıştırıyoruz.
            if (!zamanlayici.IsStarted)
                zamanlayici.Start();
            //Tetiklenecek Gövdeyi Belirliyoruz.
            IJobDetail gorev = JobBuilder.Create<CezaArttirmaDusurmeJob>().Build();
            //Tetikleyici Oluşturuyoruz.
            ICronTrigger tetikleyici = (ICronTrigger)TriggerBuilder.Create()
                .WithIdentity("CezaArttirmaDusurmeJob", "null")//Günün Hangi Saatinde Çalışacağını Belirtiyoruz.
                .WithCronSchedule("0 0 0 * * ? *")
                .Build();
            //Zamanlayıcıya görevi ve Tetikleyiciyi Tanıtıyoruz
            zamanlayici.ScheduleJob(gorev, tetikleyici);
        }
    }
}