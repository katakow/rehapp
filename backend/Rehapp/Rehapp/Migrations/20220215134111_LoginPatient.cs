using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rehapp.Migrations
{
    public partial class LoginPatient : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DoctorPatient_Doctors_DoctorsId",
                table: "DoctorPatient");

            migrationBuilder.DropForeignKey(
                name: "FK_DoctorPatient_Patients_PatientsId",
                table: "DoctorPatient");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Allergies_AllergieId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Diets_DietId",
                table: "Patients");

            migrationBuilder.DropForeignKey(
                name: "FK_Patients_Disease_DiseaseId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_AllergieId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_DietId",
                table: "Patients");

            migrationBuilder.DropIndex(
                name: "IX_Patients_DiseaseId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "AllergieId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "DietId",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "DiseaseId",
                table: "Patients");

            migrationBuilder.AddColumn<int>(
                name: "AccessFailedCount",
                table: "Patients",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ConcurrencyStamp",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "EmailConfirmed",
                table: "Patients",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "LockoutEnabled",
                table: "Patients",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "LockoutEnd",
                table: "Patients",
                type: "datetimeoffset",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NormalizedEmail",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NormalizedUserName",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PasswordHash",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "PhoneNumberConfirmed",
                table: "Patients",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "SecurityStamp",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "TwoFactorEnabled",
                table: "Patients",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "Patients",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Doctor",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pwz = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctor", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Patient",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pesel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Diet = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Allergie = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Disease = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CovidTest = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CovidCourse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AllergieId = table.Column<int>(type: "int", nullable: true),
                    DietId = table.Column<int>(type: "int", nullable: true),
                    DiseaseId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Patient", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Patient_Allergies_AllergieId",
                        column: x => x.AllergieId,
                        principalTable: "Allergies",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Patient_Diets_DietId",
                        column: x => x.DietId,
                        principalTable: "Diets",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Patient_Disease_DiseaseId",
                        column: x => x.DiseaseId,
                        principalTable: "Disease",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Patient_AllergieId",
                table: "Patient",
                column: "AllergieId");

            migrationBuilder.CreateIndex(
                name: "IX_Patient_DietId",
                table: "Patient",
                column: "DietId");

            migrationBuilder.CreateIndex(
                name: "IX_Patient_DiseaseId",
                table: "Patient",
                column: "DiseaseId");

            migrationBuilder.AddForeignKey(
                name: "FK_DoctorPatient_Doctor_DoctorsId",
                table: "DoctorPatient",
                column: "DoctorsId",
                principalTable: "Doctor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DoctorPatient_Patient_PatientsId",
                table: "DoctorPatient",
                column: "PatientsId",
                principalTable: "Patient",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DoctorPatient_Doctor_DoctorsId",
                table: "DoctorPatient");

            migrationBuilder.DropForeignKey(
                name: "FK_DoctorPatient_Patient_PatientsId",
                table: "DoctorPatient");

            migrationBuilder.DropTable(
                name: "Doctor");

            migrationBuilder.DropTable(
                name: "Patient");

            migrationBuilder.DropColumn(
                name: "AccessFailedCount",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "ConcurrencyStamp",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "EmailConfirmed",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "LockoutEnabled",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "LockoutEnd",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "NormalizedEmail",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "NormalizedUserName",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "PhoneNumberConfirmed",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "SecurityStamp",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "TwoFactorEnabled",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "UserName",
                table: "Patients");

            migrationBuilder.AddColumn<int>(
                name: "AllergieId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DietId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "DiseaseId",
                table: "Patients",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Patients_AllergieId",
                table: "Patients",
                column: "AllergieId");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_DietId",
                table: "Patients",
                column: "DietId");

            migrationBuilder.CreateIndex(
                name: "IX_Patients_DiseaseId",
                table: "Patients",
                column: "DiseaseId");

            migrationBuilder.AddForeignKey(
                name: "FK_DoctorPatient_Doctors_DoctorsId",
                table: "DoctorPatient",
                column: "DoctorsId",
                principalTable: "Doctors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_DoctorPatient_Patients_PatientsId",
                table: "DoctorPatient",
                column: "PatientsId",
                principalTable: "Patients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Allergies_AllergieId",
                table: "Patients",
                column: "AllergieId",
                principalTable: "Allergies",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Diets_DietId",
                table: "Patients",
                column: "DietId",
                principalTable: "Diets",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Patients_Disease_DiseaseId",
                table: "Patients",
                column: "DiseaseId",
                principalTable: "Disease",
                principalColumn: "Id");
        }
    }
}
