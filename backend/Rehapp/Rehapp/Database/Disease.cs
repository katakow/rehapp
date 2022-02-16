using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Rehapp.Database;

public class Disease
{
    [Key] 
    public int Id { get; set; }
    public string Label { get; set; }
    
    public ICollection<Patient> Patients { get; set; }
}