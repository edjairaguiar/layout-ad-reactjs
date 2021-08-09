import React from "react";
import "./App.css";
import ItemInfo from "./componentes/ItemInfo";

export default function App() {
  return (
    <>
      <ItemInfo
        cost="720.000"
        complexCost="450"
        iptucost="2.148"
        description="Apartamento especial, 80, 65m², iluminado, 3 quartos, sendo 1 com suíte, sala..."
        address="Rua Livramento, Santana"
        totalspace="81"
        room="3"
        garage="2"
        bathroom="2"
      />
    </>
  );
}
