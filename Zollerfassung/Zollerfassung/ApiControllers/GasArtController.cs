using Zollerfassung.ApiControllers.Base;
using Zollerfassung.Repositories;
using Zollerfassung.ViewModels;

namespace Zollerfassung.ApiControllers
{
    public class GasArtController : BaseApiController<Models.Gasart, BaseDtoWithName>
    {
        public GasArtController(ZollerfassungDbContextRepository repository) 
            :base(repository)
        {

        }
    }
}