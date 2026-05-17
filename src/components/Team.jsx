import React from "react";

export const Team = () => {
  const team = [
    {
      name: "Mari",
      role: "Especialista em Beleza",
    },
    {
      name: "Equipe Qualificada",
      role: "Atendimento Personalizado",
    },
    {
      name: "Profissionais",
      role: "Cuidados e Estética",
    },
    {
      name: "Salão Mari",
      role: "Beleza e Bem-estar",
    },
  ];

  return (
    <section
      id="team"
      style={{
        padding: "80px 0",
        background: "#ffffff",
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
            Nossa Equipe
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
            Profissionais dedicados a oferecer atendimento de qualidade,
            conforto e uma experiência especial para cada cliente.
          </p>
        </div>

        <div className="row">
          {team.map((member, index) => (
            <div
              key={index}
              className="col-md-3 col-sm-6"
              style={{
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  background: "#f8f8f8",
                  borderRadius: "14px",
                  padding: "40px 20px",
                  height: "100%",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "#111",
                    color: "#fff",
                    margin: "0 auto 25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "40px",
                  }}
                >
                  ✨
                </div>

                <h4
                  style={{
                    color: "#222",
                    marginBottom: "10px",
                    fontSize: "22px",
                  }}
                >
                  {member.name}
                </h4>

                <p
                  style={{
                    color: "#666",
                    margin: 0,
                    lineHeight: "1.7",
                  }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};