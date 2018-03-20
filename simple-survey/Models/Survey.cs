using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace SimpleSurvey.Models
{
    public class Survey
    {

        public Survey()
        {
            Results = new List<Results>();
        }

        public int SurveyId { get; set; }
        //public int UserId { get; set; }
        public string SurveyName { get; set; }
        public string SurveyData { get; set; }

        [StringLength(250)]
        public string Description { get; set; }
        public string Questions { get; set; }
        public DateTime Created { get; set; }

        public virtual List<Results> Results { get; set; }


    }


}