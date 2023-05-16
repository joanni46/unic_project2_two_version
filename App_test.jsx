import { useEffect } from "react";
// import {Router} from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import HeaderAv from "./components/HeaderAv";
import Avtoriz_main from "./Avtoriz_main";

import { CardGuest } from './components/Main/Main';
import { CardGuest } from './components/Main/Main';


// import Footer from "./components/Footer"; // xz kak vstavit footer 

export default function App() {
  useEffect(() => {
    document.cookie = "myCookie=myValue; SameSite=None; Secure";
  });

  return (
    <StyledApp>
      <div></div>
      <HeaderAv />
      <Avtoriz_main />
    </StyledApp>
  );
}
 


const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
