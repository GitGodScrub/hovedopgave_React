import TreeItemData from "./types";
//import { TypedJSON } from "typedjson";
import TestData from "../../_test-folderData.json";

async function getJsonData() {
  const url = "https://localhost:5001/treeitemdata";
  const obj = (await (await fetch(url)).json()) as TreeItemData[];
  return obj;
}

// async function getJsonData(url: string = "https://localhost:5001/api/treeitemdata") {
//   let obj = (await (await fetch(url)).json()) as TreeItemData[];
//   return obj;
// }

// async function getJsonData() {
// const serializer = new TypedJSON(TreeItemData);
//   const url = "https://localhost:5001/api/treeitemdata";
//   const obj = serializer.parseAsArray(TestData);
//   return obj;
// }

export { getJsonData };
