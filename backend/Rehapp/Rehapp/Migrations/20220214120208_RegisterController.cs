using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rehapp.Migrations
{
    public partial class RegisterController : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Height",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Weight",
                table: "Patients");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Patients",
                newName: "Sex");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Patients",
                newName: "Password");

            migrationBuilder.AddColumn<string>(
                name: "Allergie",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CovidCourse",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CovidTest",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Diet",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Disease",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Login",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Allergie",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "CovidCourse",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "CovidTest",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Diet",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Disease",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Login",
                table: "Patients");

            migrationBuilder.RenameColumn(
                name: "Sex",
                table: "Patients",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Patients",
                newName: "Name");

            migrationBuilder.AddColumn<int>(
                name: "Height",
                table: "Patients",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<double>(
                name: "Weight",
                table: "Patients",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }
    }
}
