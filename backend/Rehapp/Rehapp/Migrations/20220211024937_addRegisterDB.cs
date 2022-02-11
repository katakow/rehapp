using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rehapp.Migrations
{
    public partial class addRegisterDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AllergieId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CovidCourseId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CovidDrugId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CovidSymptomId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CovidVaccineId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DietId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "VaccineId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Allergies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Allergies", x => x.Id);
                });

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

            migrationBuilder.CreateTable(
                name: "CovidDrugss",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CovidDrugss", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CovidSymptoms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CovidSymptoms", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CovidVaccines",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CovidVaccines", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Diets",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Diets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Vaccines",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vaccines", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Patients_AllergieId",
                table: "Patients",
                column: "AllergieId");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_CovidCourseId",
                table: "Patients",
                column: "CovidCourseId");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_CovidDrugId",
                table: "Patients",
                column: "CovidDrugId");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_CovidSymptomId",
                table: "Patients",
                column: "CovidSymptomId");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_CovidVaccineId",
                table: "Patients",
                column: "CovidVaccineId");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_DietId",
                table: "Patients",
                column: "DietId");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_VaccineId",
                table: "Patients",
                column: "VaccineId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Allergies_AllergieId",
                table: "Patients",
                column: "AllergieId",
                principalTable: "Allergies",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_CovidCourses_CovidCourseId",
                table: "Patients",
                column: "CovidCourseId",
                principalTable: "CovidCourses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_CovidDrugss_CovidDrugId",
                table: "Patients",
                column: "CovidDrugId",
                principalTable: "CovidDrugss",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_CovidSymptoms_CovidSymptomId",
                table: "Patients",
                column: "CovidSymptomId",
                principalTable: "CovidSymptoms",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_CovidVaccines_CovidVaccineId",
                table: "Patients",
                column: "CovidVaccineId",
                principalTable: "CovidVaccines",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Diets_DietId",
                table: "Patients",
                column: "DietId",
                principalTable: "Diets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Vaccines_VaccineId",
                table: "Patients",
                column: "VaccineId",
                principalTable: "Vaccines",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Allergies_AllergieId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidCourses_CovidCourseId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidDrugss_CovidDrugId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidSymptoms_CovidSymptomId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidVaccines_CovidVaccineId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Diets_DietId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Vaccines_VaccineId",
                table: "Patients");

            migrationBuilder.DropTable(
                name: "Allergies");

            migrationBuilder.DropTable(
                name: "CovidCourses");

            migrationBuilder.DropTable(
                name: "CovidDrugss");

            migrationBuilder.DropTable(
                name: "CovidSymptoms");

            migrationBuilder.DropTable(
                name: "CovidVaccines");

            migrationBuilder.DropTable(
                name: "Diets");

            migrationBuilder.DropTable(
                name: "Vaccines");

            migrationBuilder.DropIndex(
                name: "IX_Patients_AllergieId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_CovidCourseId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_CovidDrugId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_CovidSymptomId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_CovidVaccineId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_DietId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_VaccineId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "AllergieId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "CovidCourseId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "CovidDrugId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "CovidSymptomId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "CovidVaccineId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "DietId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "VaccineId",
                table: "Patients");
        }
    }
}
