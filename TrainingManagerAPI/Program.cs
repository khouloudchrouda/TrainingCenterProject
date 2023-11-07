
using TrainingManagerDAL.Models;
using TrainingManagerDAL.Repository.Services;

var builder = WebApplication.CreateBuilder(args);


// Add services to the container.
builder.Services.Configure<DataBaseSettings>(
    builder.Configuration.GetSection("TrainingCenterDatabase"));

// Add services to the container.
builder.Services.AddSingleton<Servicesdatabase>();


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//services cors
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseDefaultFiles();
    app.UseStaticFiles();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("corsapp");

app.MapControllers();

app.Run();
