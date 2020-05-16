import React, { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import { getJsonData } from "./apihandler";
import { useQuery } from "react-query";
import { mapTreeItemsToJsx } from "../maintree/utils";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import folderToGet from './types'

//"Yoo, how are you able to use an argument in that function dude!?!!?"
// useQuery(queryKey, [ queryVariables], qu½eryFunction)
//https://www.npmjs.com/package/react-query#usequery


//Retrives an url.
//From this url, get an array of folder-paths, from the api
//make a number of TreeItems, from the folder-paths
function SecondTree(folder: folderToGet={folderName='Python36', folderPath='C://Python36/'}) {
  const { data } = useQuery("treeItemData", [ folderToGet], getJsonData);
  return (
    <TreeView>
      {data && mapTreeItemsToJsx(data)}
    </TreeView>
    
  );
}

export { SecondTree };



/*
function SecondTree() {
  const { data } = useQuery("treeItemData", [ folderToGet], getJsonData);
  return (
    <TreeView>
      {data && mapTreeItemsToJsx(data)}
    </TreeView>
    
  );
}

export { SecondTree };
*/