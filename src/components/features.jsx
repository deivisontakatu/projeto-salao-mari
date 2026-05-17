import React from "react";

export const Features = () => {
  const features = [
    {
      icon: "💇",
      title: "Cortes Modernos",
      text: "Serviços realizados com atenção aos detalhes e tendências atuais.",
    },
    {
      icon: "✨",
      title: "Tratamentos",
      text: "Cuidados especiais para cabelo, beleza e bem-estar.",
    },
    {
      icon: "💅",
      title: "Atendimento Personalizado",
      text: "Cada cliente recebe um atendimento único e acolhedor.",
    },
    {
      icon: "🌸",
      title: "Ambiente Confortável",
      text: "Um espaço pensado para proporcionar conforto e autoestima.",
    },
  ];

  return (
    <section
      id="features"
      style={{
        padding: "80px 0",
        backgroundColor: "#ffffff",
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
            Nossos Serviços
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
            Oferecemos serviços voltados para beleza, autoestima e cuidado
            pessoal, sempre com qualidade e dedicação.
          </p>
        </div>

        <div className="row">
          {features.map((item, index) => (
            <div
              key={index}
              className="col-xs-12 col-sm-6 col-md-3"
              style={{
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  padding: "30px 20px",
                  borderRadius: "12px",
                  background: "#f8f8f8",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    marginBottom: "20px",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    marginBottom: "15px",
                    color: "#222",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.7",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};