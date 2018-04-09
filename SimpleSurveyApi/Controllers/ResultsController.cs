using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using System.Web.Http;
using System.Web.Http.Description;
using SimpleSurvey;

namespace SimpleSurveyApi.Controllers
{
    [RoutePrefix("api")]
    [NotImplExceptionFilter]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ResultsController : ApiController
    {
        private DataContext db = new DataContext();

        // GET: api/Results
        public IQueryable<Results> GetResults()
        {
            return db.Results;
        }

        // GET: api/Results/5
        [ResponseType(typeof(Results))]
        public async Task<IHttpActionResult> GetResults(int id)
        {
            Results results = await db.Results.FindAsync(id);
            if (results == null)
            {
                return NotFound();
            }

            return Ok(results);
        }

        // PUT: api/Results/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutResults(int id, Results results)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != results.ResultsId)
            {
                return BadRequest();
            }

            db.Entry(results).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResultsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Results
        [ResponseType(typeof(Results))]
        public async Task<IHttpActionResult> PostResults(Results results)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Results.Add(results);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = results.ResultsId }, results);
        }

        // DELETE: api/Results/5
        [ResponseType(typeof(Results))]
        public async Task<IHttpActionResult> DeleteResults(int id)
        {
            Results results = await db.Results.FindAsync(id);
            if (results == null)
            {
                return NotFound();
            }

            db.Results.Remove(results);
            await db.SaveChangesAsync();

            return Ok(results);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ResultsExists(int id)
        {
            return db.Results.Count(e => e.ResultsId == id) > 0;
        }
    }
}