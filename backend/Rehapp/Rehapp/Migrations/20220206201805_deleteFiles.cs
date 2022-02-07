using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rehapp.Migrations
{
    public partial class deleteFiles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Disease",
                newName: "Label");

            migrationBuilder.AddColumn<int>(
                name: "DiseaseId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Height",
                table: "Patients",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Mail",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Pesel",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Surname",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "Weight",
                table: "Patients",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.CreateIndex(
                name: "IX_Patients_DiseaseId",
                table: "Patients",
                column: "DiseaseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Disease_DiseaseId",
                table: "Patients",
                column: "DiseaseId",
                principalTable: "Disease",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Disease_DiseaseId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_DiseaseId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "DiseaseId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Mail",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Pesel",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Surname",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Patients");

            migrationBuilder.RenameColumn(
                name: "Label",
                table: "Disease",
                newName: "Name");
        }
    }
}
