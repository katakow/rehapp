using System.ComponentModel.DataAnnotations;
using Microsoft.VisualBasic.CompilerServices;

namespace Rehapp.Database;

public class Doctor
{
    [Key]
    public int Id { get; set; }

    public ICollection<Patient> Patients { get; set; }

    public string Name { get; set; }
}