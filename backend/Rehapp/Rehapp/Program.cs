using Rehapp.Database;
using Rehapp.Logic;


var  MyAllowSpecificOrigins = "myAllowSpecificOrigins";
// Add services to the container.
var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddCors(options =>
// {
//     options.AddPolicy(name: MyAllowSpecificOrigins,
//         b =>
//         {
//             b.WithOrigins("http://localhost:5080", "https://localhost:7080", "http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
//             b.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
//             //b.SetIsOriginAllowed(host => true).AllowAnyHeader().AllowAnyMethod();
//         });
// });
builder.Services.AddCors();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<RehappContext>();
builder.Services.AddScoped<DoctorsLogic>();
builder.Services.AddScoped<DiseasesLogic>();
builder.Services.AddScoped<PatientsLogic>();
builder.Services.AddScoped<AllergiesLogic>();
builder.Services.AddScoped<VaccinesLogic>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

//app.UseCors(MyAllowSpecificOrigins);
app.UseCors(b =>
{
    b.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
    b.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();

});
app.UseAuthorization();

app.MapControllers();

app.Run();
