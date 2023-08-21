﻿using socialAppBackend.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace socialAppBackend.Domain.Interface
{
    public interface IPostInfrastructure
    {
        public List<Dictionary<string, object>> getAllPosts();
        public Post getPostbyUser();
    }
}
