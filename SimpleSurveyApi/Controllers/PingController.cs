﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SimpleSurveyApi.Controllers
{
    public class PingController : ApiController
    {
        public string Get()
        {
            return "Ping";
        }
    }
}