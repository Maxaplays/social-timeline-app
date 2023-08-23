using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using socialAppBackend.Domain.Interface;

namespace socialAppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserInfrastructure _userInfrastructure;
        public UserController(IUserInfrastructure userInfrastructure) {
            _userInfrastructure = userInfrastructure;
        }
        [HttpGet]
        [Route("all")]
        public IActionResult All() { 
            return Ok(_userInfrastructure.getAllUsers());
        }
    }
}
