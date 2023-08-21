using Microsoft.Extensions.Logging;
using socialAppBackend.Domain.Interface;
using socialAppBackend.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace socialAppBackend.Repository
{
    public class UserRepository : IUserRepository
    {
        private INeo4jDataAccess _neo4jDataAccess;

        private ILogger<UserRepository> _logger;

        public UserRepository(INeo4jDataAccess neo4jDataAccess, ILogger<UserRepository> logger)
        {
            _neo4jDataAccess = neo4jDataAccess;
            _logger = logger;
        }

        public List<Dictionary<string, object>> getAllUsers()
        {
            var query = @"MATCH (u:User) RETURN u{ username: u.username, joinDate: u.joinDate, bio: u.bio, followers: u.followers, following: u.following, postCount: u.postCount }";
            var result = _neo4jDataAccess.ExecuteReadDictionaryAsync(query, "u");

            return result.Result;
        }

        public User getUserById(int Id)
        {
            throw new NotImplementedException();
        }
    }
}
