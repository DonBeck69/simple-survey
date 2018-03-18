using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MobilityMaturityWebApp.Models
{
    public class Results
    {
        public Results()
        { }

        public int AnswersId { get; set; }
        public int UserDataId  { get; set; }
        //public int SurveyId { get; set; }
        public string AnswersGiven { get; set; }

    }
}