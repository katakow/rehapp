using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Rehapp.Migrations
{
    public partial class cleanUp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DoctorPatient");

            migrationBuilder.DropTable(
                name: "Symptoms");

            migrationBuilder.DropTable(
                name: "Doctor");

            migrationBuilder.DropTable(
                name: "Patient");

            migrationBuilder.DropTable(
                name: "Specializations");

            migrationBuilder.DropTable(
                name: "Allergies");

            migrationBuilder.DropTable(
                name: "Diets");

            migrationBuilder.DropTable(
                name: "Disease");

            migrationBuilder.DropColumn(
                name: "Allergie",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Diet",
                table: "Patients");

            migrationBuilder.DropColumn(
                name: "Disease",
                table: "Patients");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Allergie",
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
                name: "Disease",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Label = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Disease", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Doctor",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    Mail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    Pwz = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Doctor", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Specializations",
                columns: table => new
                {
                    idSpec = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    specialization = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Specializations", x => x.idSpec);
                });

            migrationBuilder.CreateTable(
                name: "Patient",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Allergie = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AllergieId = table.Column<int>(type: "int", nullable: true),
                    CovidCourse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CovidTest = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Diet = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DietId = table.Column<int>(type: "int", nullable: true),
                    Disease = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DiseaseId = table.Column<int>(type: "int", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pesel = table.Column<string>(type: "nvarchar(max)", nullable: false)
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

            migrationBuilder.CreateTable(
                name: "DoctorPatient",
                columns: table => new
                {
                    DoctorsId = table.Column<int>(type: "int", nullable: false),
                    PatientsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DoctorPatient", x => new { x.DoctorsId, x.PatientsId });
                    table.ForeignKey(
                        name: "FK_DoctorPatient_Doctor_DoctorsId",
                        column: x => x.DoctorsId,
                        principalTable: "Doctor",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DoctorPatient_Patient_PatientsId",
                        column: x => x.PatientsId,
                        principalTable: "Patient",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Symptoms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false),
                    idSpec = table.Column<int>(type: "int", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: true),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Symptoms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Symptoms_Patient_PatientId",
                        column: x => x.PatientId,
                        principalTable: "Patient",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Symptoms_Patients_Id",
                        column: x => x.Id,
                        principalTable: "Patients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Symptoms_Specializations_idSpec",
                        column: x => x.idSpec,
                        principalTable: "Specializations",
                        principalColumn: "idSpec",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DoctorPatient_PatientsId",
                table: "DoctorPatient",
                column: "PatientsId");

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

            migrationBuilder.CreateIndex(
                name: "IX_Symptoms_idSpec",
                table: "Symptoms",
                column: "idSpec");

            migrationBuilder.CreateIndex(
                name: "IX_Symptoms_PatientId",
                table: "Symptoms",
                column: "PatientId");
        }
    }
}
