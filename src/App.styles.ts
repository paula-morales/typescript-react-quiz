import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/background.jpg";

export const Style = createGlobalStyle`
html {
    height: 100%;
  align-items: center;


}

body {
background-image: url(${BGImage});
background-size:cover;  
margin:0;
padding:0;
height: 100%;
display:flex;
justify-contect:center

}

* {
    box-sizing:border-box;
    font-family: 'Mukta', sans-serif;
   

}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  > p {
    color: #fff;
  }

  .score {
    color: #111;
    font-size: 2rem;
    margin: 0 0 20px 0;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 0 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
  }

  h1 {
    font-family: "Mukta", sans-serif;
    background-color: #fff;
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 80px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: #ffff;
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 20px;
  }
  .start {
    max-width: 200px;
  }
`;
