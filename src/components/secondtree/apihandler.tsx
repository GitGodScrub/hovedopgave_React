import TreeItemData from "../maintree/types";

async function getJsonData(url: string="https://localhost:5001/treeitemdata") {
  const obj = (await (await fetch(url)).json()) as TreeItemData[];
  return obj;
}

export { getJsonData };