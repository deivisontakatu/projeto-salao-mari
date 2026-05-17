import React from "react";

export const Image = ({ title }) => {
  return (
    <div
      className="portfolio-item"
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        padding: "40px 20px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        transition: "0.3s",
        height: "100%",
      }}
    >
      <div
        style={{
          fontSize: "50px",
          marginBottom: "20px",
        }}
      >
        ✨
      </div>

      <h4
        style={{
          color: "#222",
          fontSize: "22px",
          marginBottom: "15px",
        }}
      >
        {title}
      </h4>

      <p
        style={{
          color: "#666",
          lineHeight: "1.7",
          margin: 0,
        }}
      >
        Serviço realizado com qualidade, atenção aos detalhes e foco no
        bem-estar de cada cliente.
      </p>
    </div>
  );
};