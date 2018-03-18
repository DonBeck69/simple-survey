using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MobilityMaturityWebApp.Models
{
    public class UserData
    {
        public UserData()
        {
        }
        public int UserDataId { get; set; }
        public string Data { get; set; }
        public List<Survey> Surveys { get; set; }
        public List<Results> Answers { get; set; }

    }
}