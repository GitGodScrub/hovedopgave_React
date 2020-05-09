import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";
import JsonTreeItem from "./types";

function mapTreeItemsToJsx(treeData: JsonTreeItem[]) {
  return treeData.map((itemData, i) => (
    <TreeItem key={i} nodeId={itemData.nodeId} label={itemData.label} />
  ));
}

export { mapTreeItemsToJsx };
