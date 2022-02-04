using System.ComponentModel.DataAnnotations;

namespace Rehapp.Database;

public class Patient
{
    [Key]
    public int Id { get; set; }

    public string Name { get; set; }
}