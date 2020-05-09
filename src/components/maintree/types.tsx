import "reflect-metadata";
import { jsonObject, jsonMember } from "typedjson";

export interface TreeItemData {
  nodeId: string;
  label: string;
}

@jsonObject
class JsonTreeItem implements TreeItemData {
  @jsonMember
  nodeId!: string;

  @jsonMember
  label!: string;
}//was supposed to be used in serialization

export default JsonTreeItem;
