import React, { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import { getJsonData } from "./ApiHandler";
import { useQuery } from "react-query";
import { mapTreeItemsToJsx } from "./utils";

export function MainTree() {
  const { data, isFetching } = useQuery("treeItemData", getJsonData);
  return (
    <TreeView>
      {isFetching && <div>Fetching...</div>}
      {data && mapTreeItemsToJsx(data)}
    </TreeView>
  );
}
