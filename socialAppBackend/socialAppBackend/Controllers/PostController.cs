using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Neo4j.Driver;
using socialAppBackend.Domain.Interface;
using socialAppBackend.Entity;
using System.Text;

namespace socialAppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private IPostInfrastructure _postInfrastructure;
        public PostController(IPostInfrastructure postInfrastructure){
            _postInfrastructure = postInfrastructure;
        }
        [HttpGet]
        [Route("all")]
        public IActionResult All()
        {
            return Ok(_postInfrastructure.getAllPosts());
        }
        [HttpPost]
        [Route("updateLikeCount")]
        public async Task<bool> updateLikeCount(int id, int likeCount)
        {
            var result = await _postInfrastructure.postUpdatedLikeCount(id, likeCount);
            return result;
        }

    }
}
