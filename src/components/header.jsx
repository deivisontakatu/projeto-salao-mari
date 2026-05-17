import React from "react";

export const Header = () => {
  return (
    <header className="hero" id="header">
      <div className="container">
        <div className="hero-content">

          <div className="hero-tag">
            ✨ Beleza • Autoestima • Bem-estar
          </div>

          <h1>
            Realce sua beleza
            com elegância e cuidado
          </h1>

          <p>
            O Salão Mari oferece uma experiência moderna,
            acolhedora e personalizada para valorizar
            sua autoestima em cada detalhe.
          </p>

          <a href="#services" className="btn-primary">
            Conheça nossos serviços
          </a>

        </div>
      </div>
    </header>
  );
};