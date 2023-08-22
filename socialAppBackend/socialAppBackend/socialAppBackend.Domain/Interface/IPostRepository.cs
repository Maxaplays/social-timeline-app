using socialAppBackend.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace socialAppBackend.Domain.Interface
{
    public interface IPostRepository
    {
        public List<Dictionary<string, object>> getAllPosts();
        public Task<bool> postUpdatedLikeCount(int id, int likeCount);
        public Post getPostByUser();
    }
}
