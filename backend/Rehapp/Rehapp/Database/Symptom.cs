using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Rehapp.ViewModels;

namespace Rehapp.Database;

public class Symptom
{
    [Key]
    public int Id { get; set; }
    public string name { get; set; }
    [ForeignKey("idSpec")]
    public Specialization specialization { get; set; }
    
    [ForeignKey("Id")]
    public PatientViewModel patient { get; set; }
    
}