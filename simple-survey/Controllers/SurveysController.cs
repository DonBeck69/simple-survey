using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using SimpleSurvey;
using SimpleSurvey.Models;

namespace SimpleSurvey.Controllers
{
    public class SurveysController : ApiController
    {
        private DataContext db = new DataContext();

        // GET: api/Surveys
        public IQueryable<Survey> GetSurvey()
        {
            return db.Survey;
        }

        // GET: api/Surveys/5
        [ResponseType(typeof(Survey))]
        public async Task<IHttpActionResult> GetSurvey(int id)
        {
            Survey survey = await db.Survey.FindAsync(id);
            if (survey == null)
            {
                return NotFound();
            }

            return Ok(survey);
        }

        // PUT: api/Surveys/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSurvey(int id, Survey survey)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != survey.SurveyId)
            {
                return BadRequest();
            }

            db.Entry(survey).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SurveyExists(id))
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

        // POST: api/Surveys
        [ResponseType(typeof(Survey))]
        public async Task<IHttpActionResult> PostSurvey(Survey survey)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Survey.Add(survey);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = survey.SurveyId }, survey);
        }

        // DELETE: api/Surveys/5
        [ResponseType(typeof(Survey))]
        public async Task<IHttpActionResult> DeleteSurvey(int id)
        {
            Survey survey = await db.Survey.FindAsync(id);
            if (survey == null)
            {
                return NotFound();
            }

            db.Survey.Remove(survey);
            await db.SaveChangesAsync();

            return Ok(survey);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SurveyExists(int id)
        {
            return db.Survey.Count(e => e.SurveyId == id) > 0;
        }
    }
}