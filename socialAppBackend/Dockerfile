# Use the official .NET SDK image as the build environment
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app

# Copy the entire solution and project files to the container
COPY socialAppBackend.sln ./
COPY socialAppBackend/socialAppBackend.csproj ./socialAppBackend/
COPY socialAppBackend.Domain/socialAppBackend.Domain.csproj ./socialAppBackend.Domain/
COPY socialAppBackend.Entity/socialAppBackend.Entity.csproj ./socialAppBackend.Entity/
COPY socialAppBackend.Infrastructure/socialAppBackend.Infrastructure.csproj ./socialAppBackend.Infrastructure/
COPY socialAppBackend.Repository/socialAppBackend.Repository.csproj ./socialAppBackend.Repository/

# Restore dependencies
RUN dotnet restore

# Copy the entire project contents
COPY . ./

# Build the application
RUN dotnet publish -c Release -o out

# Use the official ASP.NET Core image for the runtime environment
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build-env /app/out .

# Start the application
ENTRYPOINT ["dotnet", "socialAppBackend.dll"]