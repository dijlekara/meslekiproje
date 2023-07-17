using KutuphaneProgrami.Data.Repositories;
using System;

namespace KutuphaneProgrami.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<T> GetRepository<T>() where T : class;
        int SaveChanges();
    }
}
