using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimpleSurveyApi
{
    public class Results
    {
        public Results()
        { }

        public int ResultsId { get; set; }
        public int UserDataId  { get; set; }

        public string AnswersGiven { get; set; }
        public DateTime Started { get; set; }
        public DateTime Completed { get; set; }

    }
}