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
    public class PostRepository : IPostRepository
    {
        private INeo4jDataAccess _neo4jDataAccess;

        private ILogger<PostRepository> _logger;

        public PostRepository(INeo4jDataAccess neo4jDataAccess, ILogger<PostRepository> logger)
        {
            _neo4jDataAccess = neo4jDataAccess;
            _logger = logger;
        }

        public List<Dictionary<string, object>> getAllPosts()
        {
            var query = @"MATCH (p:Post) RETURN p{ description: p.description, likeCount: p.likeCount, timestamp: p.timestamp, id: ID(p) }";
            var result = _neo4jDataAccess.ExecuteReadDictionaryAsync(query, "p");

            return result.Result;
        }

        public async Task<bool> postUpdatedLikeCount(int id, int likeCount)
        {
            var query = @"MATCH (p:Post) WHERE ID(p) = $id SET p.likeCount = $likeCount RETURN true";
            IDictionary<string, object> parameters = new Dictionary<string, object>
                {
                    { "id", id},
                    { "likeCount", likeCount }
                };
            return await _neo4jDataAccess.ExecuteWriteTransactionAsync<bool>(query, parameters);

        }

        public Post getPostByUser()
        {
            throw new NotImplementedException();
        }
    }
}
