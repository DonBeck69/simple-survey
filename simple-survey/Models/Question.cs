using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MobilityMaturityWebApp.Models
{
    public class Question
    {
    }
}

public class Question
{
    public Question ()
    {

    }
    public string Copy { get; set;  }
    public string Type { get; set; }
    public string ValueType  { get; set;  }
    public List<string> StringArrayValues { get; set; }
    public List<int> ArrayValues { get; set; }


}