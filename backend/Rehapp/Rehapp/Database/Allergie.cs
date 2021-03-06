using System.ComponentModel.DataAnnotations;

namespace Rehapp.Database;

public class Allergie
{
    [Key] 
    public int Id { get; set; }
    public string Label { get; set; }
    
    public ICollection<Patient> Patients { get; set; }
}