using Microsoft.EntityFrameworkCore;
using Rehapp.Database;
using Rehapp.ViewModels;

namespace Rehapp.Logic;

public class CovidCourseLogic
{
    private readonly RehappContext _rehappContext;

    public CovidCourseLogic(RehappContext rehappContext)
    {
        _rehappContext = rehappContext;
    }

    public async Task<CovidCourse> AddCovidCourseAsync(CovidCourseViewModel covidCourseViewModel)
    {
        var covidCourse = new CovidCourse {Label = covidCourseViewModel.Label};
        _rehappContext.CovidCourses.Add(covidCourse);
        await _rehappContext.SaveChangesAsync();
        return covidCourse;
    }

    public async Task<IEnumerable<CovidCourseViewModel>> GetCovidCourseAsync()
    {
        return await _rehappContext.CovidCourses.Select(covidCourse => new CovidCourseViewModel
        {
            Label = covidCourse.Label,
            Id = covidCourse.Id,
        }).ToListAsync();
    }
}