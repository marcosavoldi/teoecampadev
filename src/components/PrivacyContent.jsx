import React from 'react';

const PrivacyContent = () => {
  return (
    <div style={{ textAlign: 'left', fontSize: '0.95rem' }}>
      <p>
        La presente informativa è fornita ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (“GDPR”) e
        descrive le modalità di trattamento dei dati personali degli utenti raccolti attraverso il sito web
        <strong> TeoeCampa</strong>.
      </p>

      <h3 style={h3Style}>1. Titolare del trattamento</h3>
      <p>
        Il Titolare del trattamento è <strong>Andrea Campana</strong>, contattabile all’indirizzo email 
        <a href="mailto:teoecampa@gmail.com"> teoecampa@gmail.com</a>.
      </p>

      <h3 style={h3Style}>2. Trattamento dati</h3>
      <p>
        I dati raccolti tramite il modulo di iscrizione alla newsletter (nome, cognome, email) sono finalizzati all'invio di contenuti informativi e video gratuiti. 
        Il trattamento si basa sul consenso dell'interessato.
      </p>

      <h3 style={h3Style}>3. Diritti dell’Interessato</h3>
      <p>
        L’utente ha il diritto di accedere ai propri dati, richiederne la rettifica, la cancellazione o opporsi al trattamento in qualsiasi momento via email.
      </p>

      <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
        Data ultimo aggiornamento: 11 aprile 2025.
      </p>
    </div>
  );
};

const h3Style = {
  marginTop: '20px',
  marginBottom: '10px',
  fontSize: '1.2rem',
  color: '#392F5A'
};

export default PrivacyContent;
