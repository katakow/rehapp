using Rehapp.Database;
using Rehapp.Logic;


var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Add services to the container.
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        builder =>
        {
            builder.WithOrigins("http://localhost:3000/*");
        });
});
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
app.UseCors();
app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);
app.UseAuthorization();

app.MapControllers();

app.Run();
