using socialAppBackend.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace socialAppBackend.Domain.Interface
{
    public interface IUserRepository
    {
        public List<Dictionary<string, object>> getAllUsers();
        public User getUserById(int Id);
    }
}
