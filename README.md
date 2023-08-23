# Description

The Timeline Social App is a project that allows users to interact with a timeline of posts by liking them. This project aims to provide a user-friendly interface for social interactions.

# Requirements

- [Neo4J Desktop](https://neo4j.com/download/)
- [.NET Core 6.0](https://dotnet.microsoft.com/download/dotnet/6.0)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (Optional)

Follow these steps to set up and run the Timeline Social App on your local machine.

Clone the repository:

```bash
git clone https://github.com/Maxaplays/social-timeline-app.git
```

### Database

- Install Neo4J Desktop
  - Create a new database with this credentials: User: neo4j, pass: abc123456
  - Take the data folder located in \database\data from the git clone directory and replace the one in the directory of the database
    - Neo4j Desktop\relate-data\dbmss\<NUMBEROFDATABASE>\data
  - Finally start the database from Neo4JDesktop
    ####Alternatively you can use docker
- Get the correct docker image
- Modify the "--volume" to point to the directory where data is saved

```bash
docker run --restart always --publish 7474:7474 --publish 7687:7687 --env NEO4J_AUTH=neo4j/abc123456 --volume /DirectoryWhereDataIsSaved/database/data:/data neo4j:latest
```

- Replace the data with the one cloned
- Start database

### Backend

- Navigate to the socialAppBackend folder and run:

```bash
dotnet build
```

- Navigate to the socialAppBackend\socialAppBackend folder and run:

```bash
dotnet run
```

### Frontend

- Navigate to the social-timeline-app folder and run:

```bash
npm install
```

- Navigate to the socialAppBackend\socialAppBackend folder and run:

```bash
npm start
```
