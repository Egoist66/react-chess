import {createGlobalStyle} from "styled-components";

export const Styles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: Verdana;
  }

  .black {
    background-color:#4a6282;
  }



  .board-cell img {
    max-width: 100%;
    width: 48px;
    display: block;
    position: relative;
    cursor: pointer;
    height: 48px;
  }

  .white {
    background-color: #a1b3b9;
  }

  .selected {
    background-color: #ff0042;
  }

  .available {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: #0dfda4;
  }

  .lost {
    padding: 30px;
    border-radius: 4px;
    margin-left: 50px;
    background-color: #a1b3b9
  }

  .lost p {
    text-decoration: underline 2px;
  }

  #restart {
    background-color: #4a6282;
    color: white;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    border: none;
    padding: 10px;
    display: block;
    margin-bottom: 20px;
  }

  #restart:hover {
    background-color: #a1b3b9;
  }

`