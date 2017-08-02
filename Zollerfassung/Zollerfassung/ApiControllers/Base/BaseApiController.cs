using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Zollerfassung.Models;
using Zollerfassung.Models.Base;

namespace Zollerfassung.ApiControllers.Base
{
    public class BaseApiController<T> : ApiController
        where T : BaseEntity
    {
        public ZollerfassungDbContext context { get; set; }

        public BaseApiController()
        {
            context = new ZollerfassungDbContext();
        }

        // GET api/<controller>
        public IEnumerable<T> Get()
        {
            return context.Set<T>();
        }

        // GET api/<controller>/5
        public T Get(int id)
        {
            return context.Set<T>().FirstOrDefault(x => x.ID == id);
        }

        // POST api/<controller>
        public void Post([FromBody]T value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]T value)
        {
        }
    }
}