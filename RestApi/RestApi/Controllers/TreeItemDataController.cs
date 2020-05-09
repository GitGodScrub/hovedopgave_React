using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Microsoft.AspNetCore.Cors;

namespace RestApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TreeItemDataController : ControllerBase
    {
        // GET: api/TreeItemData
        [EnableCors("AllowAll")]
        [HttpGet]
        public ActionResult<IEnumerable<Models.TreeItemData>> GetTreeItemData()
        {
            return UpdateFolderToShow();
            //return await updateFolderToShow().ToListAsync();
        }


        /*
        // GET: api/TreeItemData/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        */




        string folderPath = "C:\\Udvikler\\SOA\\FOA\\";
        private List<Models.TreeItemData> UpdateFolderToShow()
        {
            string[] subDirs = Directory.GetDirectories(folderPath);
            Array.Sort(subDirs);
            List<Models.TreeItemData> returnlist = new List<Models.TreeItemData>();
            foreach (string dirPath in subDirs)
            {
                Models.TreeItemData itemI = new Models.TreeItemData() { label = dirPath, nodeId = returnlist.Count.ToString() };
                returnlist.Add(itemI);
            }
            return returnlist;
        }

    }
}
