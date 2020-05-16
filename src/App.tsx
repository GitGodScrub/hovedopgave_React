import React from "react";
import "./App.css";
import "reflect-metadata";
import { MainTree } from "./components/maintree/index";

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <MainTree />
      <MyComponent></MyComponent>
      <Nametag name='Noman' />
      <Nametag2 name="Noman" />
    </div>
  );
}
export default App;

const MyComponent = () => (
  <div>This is my component.</div>
);

function Nametag (name) {
  return <div>{`Hi, my name is ${name}!`}</div>
};
const Nametag2 = (name) => (
  <div>{`Hi, my name is ${name}!`}</div>
);
//Måske skal jeg "render" et component uden parametre?
//Hvorfor virker "function TreeItem(props: TreeItemProps): JSX.Element"?
// Chek props ud?

