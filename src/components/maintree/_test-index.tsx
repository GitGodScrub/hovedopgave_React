import React, { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TestData from '../../_test-folderData.json';

// her er MainTree, med data'en brugt i selve componentet
function MainTree() {
  return <TreeView>
    {TestData.map((dataContent, index)=>{
      return <div>
       <h2>nodeId: {dataContent.nodeId}</h2>
       <p>label: {dataContent.label}</p>
       </div>
    })}
  </TreeView>;
}

export default MainTree;


