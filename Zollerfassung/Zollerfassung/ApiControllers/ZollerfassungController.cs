using AutoMapper;
using System.Web.Http;
using System.Data.Entity;
using Zollerfassung.ApiControllers.Base;
using Zollerfassung.ViewModels;

namespace Zollerfassung.ApiControllers
{
    public class ZollerfassungController : BaseApiController<Models.Zollerfassung, ZollerfassungDto>
    {
        // TODO: this is a workaround and should be fixed in the future
        public override ZollerfassungDto Post([FromBody] ZollerfassungDto value)
        {
            var mappingResult = Mapper.Map<Models.Zollerfassung>(value);
            context.Entry(mappingResult.Gasart).State = EntityState.Unchanged;
            context.Entry(mappingResult.Herkunft).State = EntityState.Unchanged;
            context.Entry(mappingResult.Spediteur).State = EntityState.Unchanged;
            context.Entry(mappingResult.Lieferant).State = EntityState.Unchanged;
            context.Set<Models.Zollerfassung>().Add(mappingResult);
            context.SaveChanges();
            value = Mapper.Map<ZollerfassungDto>(mappingResult);
            return value;
        }
    }
}