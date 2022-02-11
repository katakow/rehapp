using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rehapp.Migrations
{
    public partial class addRegisterLogic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidDrugss_CovidDrugId",
                table: "Patients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CovidDrugss",
                table: "CovidDrugss");

            migrationBuilder.RenameTable(
                name: "CovidDrugss",
                newName: "CovidDrugs");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CovidDrugs",
                table: "CovidDrugs",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_CovidDrugs_CovidDrugId",
                table: "Patients",
                column: "CovidDrugId",
                principalTable: "CovidDrugs",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_CovidDrugs_CovidDrugId",
                table: "Patients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CovidDrugs",
                table: "CovidDrugs");

            migrationBuilder.RenameTable(
                name: "CovidDrugs",
                newName: "CovidDrugss");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CovidDrugss",
                table: "CovidDrugss",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_CovidDrugss_CovidDrugId",
                table: "Patients",
                column: "CovidDrugId",
                principalTable: "CovidDrugss",
                principalColumn: "Id");
        }
    }
}
