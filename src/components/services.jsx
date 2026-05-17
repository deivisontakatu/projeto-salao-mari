import React from "react";

export const Services = () => {
  const services = [
    {
      icon: "💇",
      title: "Cortes",
      text: "Cortes modernos e personalizados.",
    },
    {
      icon: "✨",
      title: "Hidratação",
      text: "Tratamentos especiais para seus cabelos.",
    },
    {
      icon: "🎨",
      title: "Coloração",
      text: "Técnicas modernas e produtos profissionais.",
    },
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>

          <p>
            Atendimento profissional com foco em qualidade e experiência.
          </p>
        </div>

        <div className="grid grid-3">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};