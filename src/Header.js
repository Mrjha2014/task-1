import React from "react";
export default function Header() {
  return (
    <>
      <header className="App-header">
        <div class="header">
          <a href="/">
            <img class="img" src="logo512.png" alt="Avatar"></img>
          </a>
          <a href="/" class="logo">
            Logo
          </a>
          <div class="header-right" id="header">
            <a class="active" href="/">
              Home
            </a>

            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
