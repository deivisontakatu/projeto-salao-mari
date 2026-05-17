import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      message,
    });

    alert("Mensagem enviada com sucesso!");

    setState(initialState);
  };

  return (
    <div>
      <section
        id="contact"
        style={{
          padding: "80px 0",
          backgroundColor: "#111",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row">
            {/* FORMULÁRIO */}
            <div className="col-md-8">
              <div className="section-title">
                <h2
                  style={{
                    marginBottom: "20px",
                    fontSize: "36px",
                  }}
                >
                  Entre em Contato
                </h2>

                <p
                  style={{
                    marginBottom: "40px",
                    color: "#ccc",
                    lineHeight: "1.8",
                  }}
                >
                  Agende seu horário ou envie sua dúvida. Nossa equipe terá
                  prazer em atender você.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Seu nome"
                        required
                        value={name}
                        onChange={handleChange}
                        style={{
                          marginBottom: "20px",
                          padding: "14px",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Seu e-mail"
                        required
                        value={email}
                        onChange={handleChange}
                        style={{
                          marginBottom: "20px",
                          padding: "14px",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Digite sua mensagem"
                    required
                    value={message}
                    onChange={handleChange}
                    style={{
                      marginBottom: "20px",
                      padding: "14px",
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-lg"
                  style={{
                    background: "#fff",
                    color: "#111",
                    border: "none",
                    padding: "12px 30px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                  }}
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* INFORMAÇÕES */}
            <div className="col-md-3 col-md-offset-1">
              <div
                style={{
                  marginTop: "30px",
                }}
              >
                <h3
                  style={{
                    marginBottom: "25px",
                  }}
                >
                  Informações
                </h3>

                <p style={{ marginBottom: "15px", color: "#ccc" }}>
                  📍 R. Nelson Ferreira, 284 - Central Parque 4-LItapetininga - SP, 18207-110
                </p>

                <p style={{ marginBottom: "15px", color: "#ccc" }}>
                  ✉ perfumari.contato@gmail.com
                </p>

                <p style={{ color: "#ccc" }}>
                  Atendimento com qualidade, conforto e cuidado para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        style={{
          background: "#000",
          color: "#999",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p style={{ margin: 0 }}>
            © 2026 Salão Mari — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};