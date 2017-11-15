using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using Zollerfassung.ApiControllers.Base;
using Zollerfassung.Repositories;
using Zollerfassung.ViewModels;

namespace Zollerfassung.ApiControllers
{
    public class SpediteurController : BaseTenantApiController<Models.Spediteur, BaseDtoWithName>
    {
        public SpediteurController(ZollerfassungDbContextRepository repository) 
            :base(repository)
        {

        }
    }
}