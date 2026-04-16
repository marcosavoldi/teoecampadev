import React from 'react';
import { Calendar } from 'lucide-react';

const BookingSection = () => {
  return (
    <div className="card animate-fade" style={{ animationDelay: '0.3s' }}>
      <p className="card-title">
        Vuoi capire quali sono gli esercizi giusti per te? Prenota qui sotto la tua consulenza gratuita.
      </p>
      <div className="placeholder-box">
        <Calendar size={48} strokeWidth={1} style={{ marginBottom: '16px' }} />
        <p>Sistema di prenotazione in arrivo</p>
        <p style={{ fontSize: '0.9rem', marginTop: '8px', opacity: 0.7 }}>
          Una volta configurato, riceverai questo messaggio:<br />
          <em>"Grazie per la prenotazione, riceverai per mail tutti i dettagli. Save the date!"</em>
        </p>
      </div>
    </div>
  );
};

export default BookingSection;
