using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Zollerfassung.ApiControllers.Base;
using Zollerfassung.Models;
using Zollerfassung.Repositories;
using Zollerfassung.ViewModels;

namespace Zollerfassung.ApiControllers
{
    public class MandantController : ApiController
    {
        private ZollerfassungDbContext context;

        public MandantController(ZollerfassungDbContextRepository repository)
        {
            this.context = repository.Context();
        }

        public MandantDto Get()
        {
            var result = new MandantDto();
            var dbResult = context.Set<Mandant>();
            result.Mandanten = Mapper.Map<List<Mandant>, IEnumerable<BaseDtoWithName>>(dbResult.ToList());
            result.SelectedMandant = Mapper.Map<Mandant, BaseDtoWithName>(dbResult.FirstOrDefault(t => t.ID == context.TenantID));
            return result;
        }

        // set tenant filter on context in post
        public BaseDtoWithName Post([FromBody] BaseDtoWithName value)
        {
            context.TenantID = value.ID;
            return null;
        }
    }
}