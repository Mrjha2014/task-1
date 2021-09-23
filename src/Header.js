import React from "react";
import About from "./About";
import Contact from "./Contact";
import { Link } from "react-router-dom";

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

            <a href="/Contact">Contact</a>
            <a href="/About">About</a>
            <a>
              <i class="fas fa-bars"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
