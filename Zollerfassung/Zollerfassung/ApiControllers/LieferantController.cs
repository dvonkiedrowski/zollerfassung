using Zollerfassung.ApiControllers.Base;
using Zollerfassung.Repositories;
using Zollerfassung.ViewModels;

namespace Zollerfassung.ApiControllers
{
    public class LieferantController : BaseTenantApiController<Models.Lieferant, BaseDtoWithName>
    {
        public LieferantController(ZollerfassungDbContextRepository repository) 
            :base(repository)
        {

        }
    }
}