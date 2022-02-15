using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rehapp.Migrations
{
    public partial class DoctorRegistration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidDrugs_CovidDrugId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidSymptoms_CovidSymptomId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidVaccines_CovidVaccineId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Vaccines_VaccineId",
                table: "Patients");

            migrationBuilder.DropTable(
                name: "CovidDrugs");

            migrationBuilder.DropTable(
                name: "CovidSymptoms");

            migrationBuilder.DropTable(
                name: "CovidVaccines");

            migrationBuilder.DropTable(
                name: "Vaccines");

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
                name: "IX_Patients_VaccineId",
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
                name: "Login",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "VaccineId",
                table: "Patients");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Doctors",
                newName: "Sex");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Mail",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Pwz",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Doctors");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Doctors");

            migrationBuilder.DropColumn(
                name: "Mail",
                table: "Doctors");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Doctors");

            migrationBuilder.DropColumn(
                name: "Pwz",
                table: "Doctors");

            migrationBuilder.RenameColumn(
                name: "Sex",
                table: "Doctors",
                newName: "Name");

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

            migrationBuilder.AddColumn<string>(
                name: "Login",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "VaccineId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CovidDrugs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CovidDrugs", x => x.Id);
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
                name: "IX_Patients_VaccineId",
                table: "Patients",
                column: "VaccineId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_CovidDrugs_CovidDrugId",
                table: "Patients",
                column: "CovidDrugId",
                principalTable: "CovidDrugs",
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
                name: "FK_Patients_Vaccines_VaccineId",
                table: "Patients",
                column: "VaccineId",
                principalTable: "Vaccines",
                principalColumn: "Id");
        }
    }
}
