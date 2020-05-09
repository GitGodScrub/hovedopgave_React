import TreeItemData from "./types";
import { TypedJSON } from "typedjson";
import TestData from '../../_test-folderData.json';

async function getJsonData() {
const serializer = new TypedJSON(TreeItemData);
  const url = "https://localhost:5001/api/treeitemdata";
  const obj = serializer.parseAsArray(TestData);
  return obj;
}



export { getJsonData };

