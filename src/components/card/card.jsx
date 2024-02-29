import "./card.css";

export function Card({ customer }) {
  return (
    <>
      <div className="card">
        <h2>Datos de la reserva</h2>
        {customer ? (
          <div className="info">
            <div>
              <p>
                Nombre <span>{customer.name}</span>
              </p>
            </div>
            <div>
              <p>
                Email <span>{customer.email}</span>
              </p>
            </div>
            <div>
              <p>
                Telefono <span>{customer.phone}</span>
              </p>
            </div>
            <div>
              <p>
                Fecha reserva <span>{customer.date}</span>
              </p>
            </div>
          </div>
        ) : (
          <p style={{textAlign:"center", marginTop:"30px"}}>No hay datos de reserva</p>
        )}
      </div>
    </>
  );
}
