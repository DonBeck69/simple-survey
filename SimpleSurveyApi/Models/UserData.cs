using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimpleSurveyApi
{
    public class UserData
    {
        public UserData()
        {
        }
        public int UserDataId { get; set; }

        //public string UserName { get; set; }
        public string Data { get; set; }
        public DateTime Created { get; set; }
        public string Modified { get; set; }
        public List<Results> Results { get; set; }

    }
}