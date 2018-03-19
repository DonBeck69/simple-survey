using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleSurvey.ExtentionMethods
{
    public static class ExtentionMethods
    {
        public static short ConvertToInt16(this bool Value)
        {
            return Convert.ToInt16(Value);
        }
    }
}
