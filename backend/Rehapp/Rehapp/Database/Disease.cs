using System.ComponentModel.DataAnnotations;

namespace Rehapp.Database;

public class Disease
{
    [Key] 
    public int Id { get; set; }

    public string Name { get; set; }
}