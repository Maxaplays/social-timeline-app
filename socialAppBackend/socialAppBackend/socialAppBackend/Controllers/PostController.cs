using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using socialAppBackend.Domain.Interface;

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
    }
}
