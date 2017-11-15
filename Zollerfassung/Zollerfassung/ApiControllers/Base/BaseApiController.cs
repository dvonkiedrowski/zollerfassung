﻿using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Zollerfassung.Models;
using Zollerfassung.Models.Base;
using Zollerfassung.Repositories;
using Zollerfassung.ViewModels.Base;

namespace Zollerfassung.ApiControllers.Base
{
    public class BaseApiController<TEntity, TDto> : ApiController
        where TEntity : BaseEntity
        where TDto : BaseDto
    {
        private ZollerfassungDbContext context;

        public BaseApiController(ZollerfassungDbContextRepository repository)
        {
            context = repository.Context();
        }

        // GET api/<controller>
        public virtual IEnumerable<TDto> Get()
        {
            var dbResult = context.Set<TEntity>().ToList();
            return Mapper.Map<List<TEntity>, IEnumerable<TDto>>(dbResult);
        }

        // GET api/<controller>/5
        public virtual TDto Get(int id)
        {
            var dbResult = context.Set<TEntity>().FirstOrDefault(x => x.ID == id);
            return Mapper.Map<TEntity, TDto>(dbResult);
        }

        // POST api/<controller>
        public virtual TDto Post([FromBody]TDto value)
        {
            var mappingResult = Mapper.Map<TEntity>(value);
            context.Set<TEntity>().Add(mappingResult);
            context.SaveChanges();
            value = Mapper.Map<TDto>(mappingResult);
            return value;
        }

        // PUT api/<controller>/5
        public virtual void Put(int id, [FromBody]TDto value)
        {
            var mappingResult = Mapper.Map<TEntity>(value);
            var dbResult = context.Set<TEntity>().FirstOrDefault(x => x.ID == id);
            context.Entry(dbResult).CurrentValues.SetValues(mappingResult);
            context.SaveChanges();
        }
    }
}