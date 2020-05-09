import React, { useState } from "react";
import TreeView from "@material-ui/lab/TreeView";
import { getJsonData } from "./apihandler";
import { useQuery } from "react-query";
import { mapTreeItemsToJsx } from "./utils";

//MainTree is the "main container" for the all the tree-stuff.
// it gets some "data", that is, Json (converted to treeItemData) from the API, and than it showes that sh*t into a apropriate <tags>
//It is "translating" the Json in a pretty hacky way, as it is using the "as" keyword, in getJsonData(),
// this means that stuff can/will break, if the data is not in the expected format.
//This could be solved by "serializing" the data, into an object. But we tried that, and its hard to get to work right/at all.  Yeah, sad.
function MainTree() {
  const { data, isFetching } = useQuery("treeItemData", getJsonData);
  return (
    <TreeView>
      {isFetching && <div>Fetching...</div>}
      {data && mapTreeItemsToJsx(data)}
    </TreeView>
  );
}

export { MainTree };

//This did not work. Im not sure why getJsonData can't have parentheses, but it cant.  Idk why.
// export function MainTree() {
//   const url = "https://localhost:5001/api/treeitemdata";
//   const { data, isFetching } = useQuery("treeItemData", getJsonData(url));
//   return (
//     <TreeView>
//       {isFetching && <div>Fetching...</div>}
//       {data && mapTreeItemsToJsx(data)}
//     </TreeView>
//   );
// }
