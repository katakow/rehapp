﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Rehapp.Database;

#nullable disable

namespace Rehapp.Migrations
{
    [DbContext(typeof(RehappContext))]
    [Migration("20220211024937_addRegisterDB")]
    partial class addRegisterDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("DoctorPatient", b =>
                {
                    b.Property<int>("DoctorsId")
                        .HasColumnType("int");

                    b.Property<int>("PatientsId")
                        .HasColumnType("int");

                    b.HasKey("DoctorsId", "PatientsId");

                    b.HasIndex("PatientsId");

                    b.ToTable("DoctorPatient");
                });

            modelBuilder.Entity("Rehapp.Database.Allergie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Allergies");
                });

            modelBuilder.Entity("Rehapp.Database.CovidCourse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("CovidCourses");
                });

            modelBuilder.Entity("Rehapp.Database.CovidDrug", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("CovidDrugss");
                });

            modelBuilder.Entity("Rehapp.Database.CovidSymptom", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("CovidSymptoms");
                });

            modelBuilder.Entity("Rehapp.Database.CovidVaccine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("CovidVaccines");
                });

            modelBuilder.Entity("Rehapp.Database.Diet", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Diets");
                });

            modelBuilder.Entity("Rehapp.Database.Disease", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Disease");
                });

            modelBuilder.Entity("Rehapp.Database.Doctor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Doctors");
                });

            modelBuilder.Entity("Rehapp.Database.Patient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int?>("AllergieId")
                        .HasColumnType("int");

                    b.Property<int?>("CovidCourseId")
                        .HasColumnType("int");

                    b.Property<int?>("CovidDrugId")
                        .HasColumnType("int");

                    b.Property<int?>("CovidSymptomId")
                        .HasColumnType("int");

                    b.Property<int?>("CovidVaccineId")
                        .HasColumnType("int");

                    b.Property<int?>("DietId")
                        .HasColumnType("int");

                    b.Property<int?>("DiseaseId")
                        .HasColumnType("int");

                    b.Property<int>("Height")
                        .HasColumnType("int");

                    b.Property<string>("Mail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pesel")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Surname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("VaccineId")
                        .HasColumnType("int");

                    b.Property<double>("Weight")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("AllergieId");

                    b.HasIndex("CovidCourseId");

                    b.HasIndex("CovidDrugId");

                    b.HasIndex("CovidSymptomId");

                    b.HasIndex("CovidVaccineId");

                    b.HasIndex("DietId");

                    b.HasIndex("DiseaseId");

                    b.HasIndex("VaccineId");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("Rehapp.Database.Vaccine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Label")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Vaccines");
                });

            modelBuilder.Entity("DoctorPatient", b =>
                {
                    b.HasOne("Rehapp.Database.Doctor", null)
                        .WithMany()
                        .HasForeignKey("DoctorsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Rehapp.Database.Patient", null)
                        .WithMany()
                        .HasForeignKey("PatientsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Rehapp.Database.Patient", b =>
                {
                    b.HasOne("Rehapp.Database.Allergie", null)
                        .WithMany("Patients")
                        .HasForeignKey("AllergieId");

                    b.HasOne("Rehapp.Database.CovidCourse", null)
                        .WithMany("Patients")
                        .HasForeignKey("CovidCourseId");

                    b.HasOne("Rehapp.Database.CovidDrug", null)
                        .WithMany("Patients")
                        .HasForeignKey("CovidDrugId");

                    b.HasOne("Rehapp.Database.CovidSymptom", null)
                        .WithMany("Patients")
                        .HasForeignKey("CovidSymptomId");

                    b.HasOne("Rehapp.Database.CovidVaccine", null)
                        .WithMany("Patients")
                        .HasForeignKey("CovidVaccineId");

                    b.HasOne("Rehapp.Database.Diet", null)
                        .WithMany("Patients")
                        .HasForeignKey("DietId");

                    b.HasOne("Rehapp.Database.Disease", null)
                        .WithMany("Patients")
                        .HasForeignKey("DiseaseId");

                    b.HasOne("Rehapp.Database.Vaccine", null)
                        .WithMany("Patients")
                        .HasForeignKey("VaccineId");
                });

            modelBuilder.Entity("Rehapp.Database.Allergie", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("Rehapp.Database.CovidCourse", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("Rehapp.Database.CovidDrug", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("Rehapp.Database.CovidSymptom", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("Rehapp.Database.CovidVaccine", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("Rehapp.Database.Diet", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("Rehapp.Database.Disease", b =>
                {
                    b.Navigation("Patients");
                });

            modelBuilder.Entity("Rehapp.Database.Vaccine", b =>
                {
                    b.Navigation("Patients");
                });
#pragma warning restore 612, 618
        }
    }
}
