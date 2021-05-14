import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import SocketProvider from "./context/SocketProvider";
import FormsWrapper from "./components/Forms/FormsWrapper";

function App() {
  return (
    <>
        <Header/>
        <SocketProvider>
            <FormsWrapper/>
        </SocketProvider>
    </>
  );
}

export default App;
