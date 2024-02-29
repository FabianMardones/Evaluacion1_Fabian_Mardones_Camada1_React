import { useState } from "react";
import "./formulario.css";

export function Formulario({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, email, phone, date].includes('')) {
      console.log('Hay al menos un campo vacío');
      setError(true);
      return;
    }
    setError(false);

    const formData = {
      name,
      email,
      phone,
      date,
    };

    onSubmit(formData);

    setName('');
    setEmail('');
    setPhone('');
    setDate('');
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <h2>Reserva tu mesa</h2>
        <div className="formContainer">

          {error && (
            <div className="mensajeError">
              <p>Todos los campos son obligatorios</p>
            </div>
          )}
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            id="name"
            placeholder="nombre completo"
            className="inputForm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email"
            className="inputForm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="telefono">Numero de telefono</label>
          <input
            type="number"
            id="numero"
            placeholder="telefono contacto"
            className="inputForm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="telefono">Fecha</label>
          <input
            type="date"
            id="fecha"
            placeholder="fecha reservación"
            className="inputForm"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="submit"
            value={"Reservar"}
            placeholder="fecha reservación"
            className="inputForm"
          />
        </div>
      </form>
    </>
  );
}
