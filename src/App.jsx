import { useState } from 'react'

import './App.css'
import { Formulario } from './components/formulario/formulario'
import { Card } from './components/card/card'

function App() {
  const [customer, setCustomer] = useState(null);

  const handleFormSubmit = (formData) => {
    setCustomer(formData);
  }

  return (
    <>
      <Formulario onSubmit={handleFormSubmit} />
      {
        customer && <Card customer={customer} />
      }
    </>
  )
}

export default App;
