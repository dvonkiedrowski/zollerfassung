using Zollerfassung.ApiControllers.Base;
using Zollerfassung.Repositories;
using Zollerfassung.ViewModels;

namespace Zollerfassung.ApiControllers
{
    public class HerkunftController : BaseTenantApiController<Models.Herkunft, BaseDtoWithName>
    {
        public HerkunftController(ZollerfassungDbContextRepository repository) 
            :base(repository)
        {

        }
    }
}