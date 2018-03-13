using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MobilityMaturityWebApp.Models
{
    public class Survey
    {

        public Survey() { }
        public string SurveyName { get; set; }
        public List<Question> Questions { get; set; }



    }


}