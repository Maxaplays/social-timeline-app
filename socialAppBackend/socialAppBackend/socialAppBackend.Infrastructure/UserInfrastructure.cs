using socialAppBackend.Domain.Interface;
using socialAppBackend.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace socialAppBackend.Infrastructure
{
    public class UserInfrastructure : IUserInfrastructure
    {
        private IUserRepository _repository;
        public UserInfrastructure(IUserRepository repository)
        {
            _repository = repository;
        }

        public List<Dictionary<string, object>> getAllUsers()
        {
            return _repository.getAllUsers();
        }

        public User getUserById()
        {
            throw new NotImplementedException();
        }
    }
}
