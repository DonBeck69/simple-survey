namespace SimpleSurvey.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Start : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Results",
                c => new
                    {
                        ResultsId = c.Int(nullable: false, identity: true),
                        UserDataId = c.Int(nullable: false),
                        AnswersGiven = c.String(),
                        Started = c.DateTime(nullable: false),
                        Completed = c.DateTime(nullable: false),
                        Survey_SurveyId = c.Int(),
                    })
                .PrimaryKey(t => t.ResultsId)
                .ForeignKey("dbo.Surveys", t => t.Survey_SurveyId)
                .ForeignKey("dbo.UserDatas", t => t.UserDataId, cascadeDelete: true)
                .Index(t => t.UserDataId)
                .Index(t => t.Survey_SurveyId);
            
            CreateTable(
                "dbo.Surveys",
                c => new
                    {
                        SurveyId = c.Int(nullable: false, identity: true),
                        SurveyName = c.String(),
                        SurveyData = c.String(),
                        Description = c.String(maxLength: 250),
                        Questions = c.String(),
                        Created = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.SurveyId);
            
            CreateTable(
                "dbo.UserDatas",
                c => new
                    {
                        UserDataId = c.Int(nullable: false, identity: true),
                        Data = c.String(),
                    })
                .PrimaryKey(t => t.UserDataId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Results", "UserDataId", "dbo.UserDatas");
            DropForeignKey("dbo.Results", "Survey_SurveyId", "dbo.Surveys");
            DropIndex("dbo.Results", new[] { "Survey_SurveyId" });
            DropIndex("dbo.Results", new[] { "UserDataId" });
            DropTable("dbo.UserDatas");
            DropTable("dbo.Surveys");
            DropTable("dbo.Results");
        }
    }
}
