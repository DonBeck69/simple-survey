using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Cors;
using Newtonsoft.Json;

namespace SimpleSurveyApi.Controllers
{
    [RoutePrefix("api")]
    [NotImplExceptionFilter]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserDataController : ApiController
    {
        private DataContext db = new DataContext();

        public UserDataController() { }

        // GET: api/UserDatas
        //public async Task<UserData> Get(int id)
        //{
        //    UserData userData = await db.UserData.FindAsync(id);


        //    return user;
        //}

        // GET: api/UserDatas/5
        [ResponseType(typeof(UserData))]
        public async Task<IHttpActionResult> Get(int id)
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
        public async Task Put(string User)
        {
            UserData userData = new UserData();
            int userId = 0;
            try
            {
                userData = JsonConvert.DeserializeObject<UserData>(User);
                if (!ModelState.IsValid)
                {
                    throw new Exception("");
                }

                db.Entry(userData).State = EntityState.Modified;

                await db.SaveChangesAsync();
                userId = userData.UserDataId;
            }
            catch (Exception ex)
            {
                HttpResponseMessage resp = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    Content = new StringContent(ex.ToString()),
                    ReasonPhrase = ex.Message.ToString()
                };
                throw new HttpResponseException(resp);
            }

            //return userId;
        }

        // POST: api/UserDatas
        public int Post([FromBody]Dictionary<string, object> User)
        {
            UserData userData = new UserData() {
                Created = Convert.ToDateTime(User["Created"]),
                Data = User["Data"].ToString(),
                Modified = User["Modified"].ToString(),
                //Results = null

            };
            int userId = 0;

            try
            {
                //userData = JsonConvert.DeserializeObject<UserData>(userData);
                db.UserData.Add(userData);
                db.SaveChanges();
                userId = userData.UserDataId;
            }
            catch (Exception ex)
            {
                HttpResponseMessage resp = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    Content = new StringContent(ex.ToString()),
                    ReasonPhrase = ex.Message.ToString()
                };
                throw new HttpResponseException(resp);
            }

            return userId;
        }

        // DELETE: api/UserDatas/5
        [ResponseType(typeof(UserData))]
        public async Task<IHttpActionResult> Delete(int id)
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