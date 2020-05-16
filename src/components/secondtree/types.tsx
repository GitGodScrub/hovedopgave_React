import React, { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeItemProps from "@material-ui/lab/TreeItem";

interface folderToGet {
  folderName: string;
  folderPath: string;
}

export default folderToGet;

// interface TreeNodeProps extends TreeItemProps{
//     /*
//     *
//     */
//    FullPath: string;
// }

//Example:
/* 
export interface TreeItemData {
    nodeId: string;
    label: string;
  }
  
  @jsonObject
  class JsonTreeItem implements TreeItemData {
    @jsonMember
    nodeId!: string;
  
    @jsonMember
    label!: string;
  }//was supposed to be used in serialization
  
  export default JsonTreeItem;
  */

//Cheatsheet:
/*
//TreeNode.FunctionOrProperty == TreeItemImplementation (custom implementation)
TreeNode.Nodes == children
TreeNode.FullPath == ??? (custom function)
TreeNode.Parent == ??? 
TreeNode.Text == label
TreeNode.Tag == ??


TreeNode.Checked -- expanded OR TreeView expanded
TreeNode.ImageIndex + TreeNode.SelectedImageIndex
  -- collapseIcon + endIcon + expandIcon + icon
*/

//Functions to add
/*
function TreeNode.FullPath(){
  //Returns "path", as in, all parents(recursive) labels + its own
  // maybe some formatting, as in, adding slashes (//)
}
//Would make sense, but thats not the way it was made in winforms
//function TreeView.GetParent(nodeId: string)
...

*/
