using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace socialAppBackend.Entity
{
    public class User

    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string AvatarUrl { get; set; }
        public string Bio { get; set; }
        public string JoinDate { get; set; }
        public string Followers { get; set; }
        public string Following { get; set; }
    }
}
