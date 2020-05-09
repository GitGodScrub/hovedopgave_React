using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RestApi.Models
{
    public partial class TreeItemData
    {
        [Key]
        public string nodeId { get; set; }
        public string label { get; set; }
    }
}
