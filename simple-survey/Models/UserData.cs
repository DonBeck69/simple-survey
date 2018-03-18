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
        public int UserId { get; set; }
        public string Data { get; set; }
        public List<Survey> Surveys { get; set; }

    }
}