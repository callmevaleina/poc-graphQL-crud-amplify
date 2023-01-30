import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
      width: 100%;
      height: 100vh;
      box-sizing: border-box;

    }
    *,*::before,*::after{
      margin:0;
      padding: 0;
    }
    body{
      font-family: 'Sirin Stencil';
      overflow-x: hidden;
      box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6{
      margin:0;
      padding: 0;
    }
    a{
      color:inherit;
      text-decoration:none;
    }
    ul{
      list-style: none;
    }
    `;

export default GlobalStyles;
