import React, { useState } from "react";
import TreeItemData from "./types";
//import { TypedJSON } from "typedjson";
import TestData from "../../_test-folderData.json";

async function getJsonData() {
  const url = "https://localhost:5001/treeitemdata";
  const obj = (await (await fetch(url)).json()) as TreeItemData[];
  return obj;
}

export { getJsonData };


//getJsonData can't have parentheses. see notes in MainTree.tsx
// async function getJsonData(url: string = "https://localhost:5001/api/treeitemdata") {
//   let obj = (await (await fetch(url)).json()) as TreeItemData[];
//   return obj;
// }


//Attempt at serialization. Didnt work, see notes in MainTree.tsx
// async function getJsonData() {
// const serializer = new TypedJSON(TreeItemData);
//   const url = "https://localhost:5001/api/treeitemdata";
//   const obj = serializer.parseAsArray(TestData);
//   return obj;
// }