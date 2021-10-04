import React from "react";

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
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
          <div class="header-right">
            <a class="active" href="/">
              Home
            </a>

            <a href="#">Contact</a>
            <a href="#">About</a>
            <a class="fa fa-bars"></a>
          </div>
        </div>
      </header>
    </>
  );
}
