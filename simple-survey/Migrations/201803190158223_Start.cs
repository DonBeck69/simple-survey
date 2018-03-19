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
                    })
                .PrimaryKey(t => t.ResultsId)
                .ForeignKey("dbo.UserDatas", t => t.UserDataId, cascadeDelete: true)
                .Index(t => t.UserDataId);
            
            CreateTable(
                "dbo.Surveys",
                c => new
                    {
                        SurveyId = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        SurveyName = c.String(),
                        Description = c.String(),
                        Questions = c.String(),
                        UserData_UserDataId = c.Int(),
                    })
                .PrimaryKey(t => t.SurveyId)
                .ForeignKey("dbo.UserDatas", t => t.UserData_UserDataId)
                .Index(t => t.UserData_UserDataId);
            
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
            DropForeignKey("dbo.Surveys", "UserData_UserDataId", "dbo.UserDatas");
            DropForeignKey("dbo.Results", "UserDataId", "dbo.UserDatas");
            DropIndex("dbo.Surveys", new[] { "UserData_UserDataId" });
            DropIndex("dbo.Results", new[] { "UserDataId" });
            DropTable("dbo.UserDatas");
            DropTable("dbo.Surveys");
            DropTable("dbo.Results");
        }
    }
}
