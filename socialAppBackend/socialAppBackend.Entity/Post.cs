using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace socialAppBackend.Entity
{
    public class Post
    {
        public int Id { get; set; }
        public string description { get; set; }
        public int likeCount { get; set; }
        public string timeStamp { get; set; }

    }
}
