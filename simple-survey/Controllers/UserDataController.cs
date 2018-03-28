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
    public class UserDataController : ApiController
    {
        private DataContext db = new DataContext();

        // GET: api/UserDatas
        public IQueryable<UserData> GetUserData()
        {
            return db.UserData;
        }

        // GET: api/UserDatas/5
        [ResponseType(typeof(UserData))]
        public async Task<IHttpActionResult> GetUserData(int id)
        {
            UserData userData = await db.UserData.FindAsync(id);
            if (userData == null)
            {
                return NotFound();
            }

            return Ok(userData);
        }

        // PUT: api/UserDatas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutUserData(int id, UserData userData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userData.UserDataId)
            {
                return BadRequest();
            }

            db.Entry(userData).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDataExists(id))
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

        // POST: api/UserDatas
        [ResponseType(typeof(UserData))]
        public async Task<IHttpActionResult> PostUserData(UserData userData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserData.Add(userData);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = userData.UserDataId }, userData);
        }

        // DELETE: api/UserDatas/5
        [ResponseType(typeof(UserData))]
        public async Task<IHttpActionResult> DeleteUserData(int id)
        {
            UserData userData = await db.UserData.FindAsync(id);
            if (userData == null)
            {
                return NotFound();
            }

            db.UserData.Remove(userData);
            await db.SaveChangesAsync();

            return Ok(userData);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserDataExists(int id)
        {
            return db.UserData.Count(e => e.UserDataId == id) > 0;
        }
    }
}