using Neo4j.Driver;
using socialAppBackend.Domain.Interface;
using socialAppBackend.Entity;
using socialAppBackend.Infrastructure;
using socialAppBackend.Repository;
using socialAppBackend.Repository.DbConfig;

var builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;
var settings = new ApplicationSettings();

configuration.GetSection("ApplicationSettings").Bind(settings);

builder.Services.AddScoped<IUserRepository,UserRepository>();
builder.Services.AddScoped<IUserInfrastructure, UserInfrastructure>();
builder.Services.AddScoped<IPostRepository, PostRepository>();
builder.Services.AddScoped<IPostInfrastructure, PostInfrastructure>();
builder.Services.AddScoped<INeo4jDataAccess, Neo4JContext>();

builder.Services.AddSingleton(GraphDatabase.Driver(settings.Neo4jConnection, AuthTokens.Basic(settings.Neo4jUser, settings.Neo4jPassword))
);
// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                                                   .AllowAnyMethod()
                                                   .AllowAnyHeader()));

var app = builder.Build();


app.UseCors("AllowAll");


app.MapControllers();

app.Run();