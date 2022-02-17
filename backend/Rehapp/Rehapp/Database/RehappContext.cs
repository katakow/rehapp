using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Rehapp.ViewModels;

namespace Rehapp.Database;

public class RehappContext : DbContext
{
    public DbSet<PatientViewModel> Patients { get; set; }
    public DbSet<DoctorViewModel> Doctors { get; set; }
    public DbSet<AdminViewModel> Admins { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlServer("Server=localhost,1433; Database=Rehapp;User=sa; Password=1StrongPassword!");
}