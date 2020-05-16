import React, { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import { useQuery } from "react-query";
import { mapTreeItemsToJsx } from "../maintree/utils";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';


interface Props{ 
}

//Retrurns a <TreeItem>, with a label that matches the string it is given,
// and a nodeId matching a int it is given
function SingleTreeItem() {
    return (
        <> 
        </>
    );
}

export { SingleTreeItem }