using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;

namespace SimpleSurveyApi
{
    public class DataContext : DbContext
    {
        public DbSet<UserData> UserData { get; set; }
        public DbSet<Survey> Survey { get; set; }
        public DbSet<Results> Results { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Profile>().Ignore(i => i.AverageScore);
        }
    }
}