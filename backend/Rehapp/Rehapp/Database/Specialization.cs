using System.ComponentModel.DataAnnotations;

namespace Rehapp.Database;

public class Specialization
{
    [Key]
    public int idSpec { get; set; }
    public string specialization { get; set; }
}