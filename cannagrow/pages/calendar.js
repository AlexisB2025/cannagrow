// pages/calendar.js
import { useState } from 'react'

export default function Calendar() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Regar plantas', date: '2025-10-01' },
    { id: 2, title: 'Fertilizar', date: '2025-10-03' }
  ])

  const handleAddEvent = () => {
    const title = prompt('Nombre del evento')
    const date = prompt('Fecha (YYYY-MM-DD)')
    if (title && date) {
      setEvents([...events, { id: Date.now(), title, date }])
    }
  }

  return (
    <div className="calendar-container">
      <h1>Calendario de Cultivo</h1>
      <button onClick={handleAddEvent}>Agregar evento</button>
      <ul>
        {events.map(ev => (
          <li key={ev.id}>
            {ev.date}: {ev.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
