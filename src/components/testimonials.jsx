import React from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Cliente",
      text: "Excelente atendimento e um ambiente muito agradável. Adorei o resultado.",
    },
    {
      name: "Cliente",
      text: "Profissionais atenciosos e serviços de qualidade. Recomendo muito.",
    },
    {
      name: "Cliente",
      text: "Uma experiência incrível. Me senti muito bem atendida do começo ao fim.",
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        padding: "80px 0",
        background: "#111",
        color: "#fff",
      }}
    >
      <div className="container">
        <div
          className="section-title text-center"
          style={{
            marginBottom: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "38px",
              marginBottom: "20px",
            }}
          >
            O que nossos clientes dizem
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#ccc",
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            Depoimentos de clientes que confiaram no trabalho e atendimento do
            Salão Mari.
          </p>
        </div>

        <div className="row">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="col-md-4"
              style={{
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  background: "#1c1c1c",
                  padding: "35px 25px",
                  borderRadius: "14px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "#fff",
                    color: "#111",
                    margin: "0 auto 25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                >
                  ✨
                </div>

                <p
                  style={{
                    color: "#ddd",
                    lineHeight: "1.8",
                    fontStyle: "italic",
                    marginBottom: "25px",
                  }}
                >
                  "{item.text}"
                </p>

                <div
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  — {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};