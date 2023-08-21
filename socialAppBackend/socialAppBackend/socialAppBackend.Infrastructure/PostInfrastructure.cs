using socialAppBackend.Domain.Interface;
using socialAppBackend.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace socialAppBackend.Infrastructure
{
    public class PostInfrastructure : IPostInfrastructure
    {
        private IPostRepository _repository;
        public PostInfrastructure(IPostRepository repository)
        {
            _repository = repository;
        }
        public List<Dictionary<string, object>> getAllPosts()
        {
            return _repository.getAllPosts();
        }

        public Post getPostbyUser()
        {
            throw new NotImplementedException();
        }
    }
}
