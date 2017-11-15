using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Zollerfassung.Models;
using Zollerfassung.Models.Base;
using Zollerfassung.Repositories;
using Zollerfassung.ViewModels.Base;

namespace Zollerfassung.ApiControllers.Base
{
    public class BaseTenantApiController<TEntity, TDto> : ApiController
        where TEntity : BaseTenantEntity
        where TDto : BaseDto
    {
        protected ZollerfassungDbContext context;

        public BaseTenantApiController(ZollerfassungDbContextRepository repository)
        {
            context = repository.Context();
        }

        // GET api/<controller>
        public virtual IEnumerable<TDto> Get()
        {
            var dbResult = context.Set<TEntity>().Where(t => context.TenantID.HasValue ? t.TenantID == context.TenantID.Value : true).ToList();
            return Mapper.Map<List<TEntity>, IEnumerable<TDto>>(dbResult);
        }

        // GET api/<controller>/5
        public virtual TDto Get(int id)
        {
            var dbResult = context.Set<TEntity>().FirstOrDefault(x => x.ID == id && context.TenantID.HasValue ? x.TenantID == context.TenantID.Value : true);
            return Mapper.Map<TEntity, TDto>(dbResult);
        }

        // POST api/<controller>
        public virtual TDto Post([FromBody]TDto value)
        {
            if (!context.TenantID.HasValue)
            {
                throw new System.Exception("Tenant-Filter is not set");
            }

            var mappingResult = Mapper.Map<TEntity>(value);
            mappingResult.TenantID = context.TenantID.Value;
            context.Set<TEntity>().Add(mappingResult);
            context.SaveChanges();
            value = Mapper.Map<TDto>(mappingResult);
            return value;
        }

        // PUT api/<controller>/5
        public virtual void Put(int id, [FromBody]TDto value)
        {
            var mappingResult = Mapper.Map<TEntity>(value);
            context.Entry(mappingResult).Property(t => t.TenantID).IsModified = false;
            var dbResult = context.Set<TEntity>().FirstOrDefault(x => x.ID == id);
            context.Entry(dbResult).CurrentValues.SetValues(mappingResult);
            context.SaveChanges();
        }
    }
}