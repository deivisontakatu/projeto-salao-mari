import React from "react";

export const Gallery = () => {
  const services = [
    "Corte Feminino",
    "Escova e Finalização",
    "Coloração",
    "Hidratação Capilar",
    "Design de Sobrancelha",
    "Cuidados Especiais",
  ];

  return (
    <section
      id="portfolio"
      style={{
        padding: "80px 0",
        background: "#f8f8f8",
        textAlign: "center",
      }}
    >
      <div className="container">
        <div
          className="section-title"
          style={{
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "38px",
              marginBottom: "20px",
              color: "#222",
            }}
          >
            Nossos Trabalhos
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#666",
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            Conheça alguns dos serviços e experiências oferecidas pelo Salão
            Mari, sempre com foco em beleza, autoestima e bem-estar.
          </p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-sm-6 col-md-4"
              style={{
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  padding: "50px 20px",
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

                <h3
                  style={{
                    color: "#222",
                    marginBottom: "15px",
                  }}
                >
                  {service}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.7",
                  }}
                >
                  Atendimento realizado com cuidado, qualidade e atenção aos
                  detalhes.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};