﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimpleSurvey.Models
{
    public class Survey
    {

        public Survey() { }
        public int SurveyId { get; set; }
        public int UserId { get; set; }
        public string SurveyName { get; set; }

        public string Description { get; set; }
        public string Questions { get; set; }



    }


}