using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Rehapp.ViewModels;

namespace Rehapp.Database;

public class RehappContext : DbContext
{
    public DbSet<Patient> Patients { get; set; }
    public DbSet<Doctor> Doctors { get; set; }
    public DbSet<Disease> Disease { get; set; }
    public DbSet<Diet> Diets { get; set; } 
    public DbSet<Allergie> Allergies { get; set; }
    public DbSet<Vaccine> Vaccines { get; set; }
    public DbSet<CovidDrug> CovidDrugs { get; set; }
    public DbSet<CovidCourse> CovidCourses { get; set; } 
    public DbSet<CovidVaccine> CovidVaccines { get; set; }
    public DbSet<CovidSymptom> CovidSymptoms { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer("Server=localhost,1433; Database=Rehapp;User=sa; Password=1StrongPassword!");
}