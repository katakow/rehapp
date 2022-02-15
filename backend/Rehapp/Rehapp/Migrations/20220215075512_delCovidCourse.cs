using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rehapp.Migrations
{
    public partial class delCovidCourse : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidCourses_CovidCourseId",
                table: "Patients");

            migrationBuilder.DropTable(
                name: "CovidCourses");

            migrationBuilder.DropIndex(
                name: "IX_Patients_CovidCourseId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "CovidCourseId",
                table: "Patients");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CovidCourseId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CovidCourses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CovidCourses", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Patients_CovidCourseId",
                table: "Patients",
                column: "CovidCourseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_CovidCourses_CovidCourseId",
                table: "Patients",
                column: "CovidCourseId",
                principalTable: "CovidCourses",
                principalColumn: "Id");
        }
    }
}
