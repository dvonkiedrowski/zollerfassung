using System;
using Zollerfassung.Models;

namespace Zollerfassung.Repositories
{
    public class ZollerfassungDbContextRepository
    {
        protected ZollerfassungDbContext context;

        public ZollerfassungDbContextRepository()
        {
            if (context == null)
            {
                context = new ZollerfassungDbContext();
                context.TenantID = 1;
            }
        }

        public ZollerfassungDbContext Context()
        {
            if (context == null)
            {
                context = new ZollerfassungDbContext();
                context.TenantID = 1;
            }

            return context;
        }
    }
}