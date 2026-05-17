import React from "react";

export const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h2>Salão Mari</h2>

        <div className="nav-links">
          <a href="#services">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </nav>
  );
};