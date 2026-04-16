import React from 'react';

const ExerciseSection = () => {
  return (
    <div className="card animate-fade" style={{ 
      animationDelay: '0.2s', 
      paddingLeft: '0', 
      paddingRight: '0',
      overflow: 'hidden'
    }}>
      <p style={{ 
        textAlign: 'center', 
        fontSize: '1.2rem', 
        padding: '0 30px 25px 30px', 
        fontWeight: '500',
        lineHeight: '1.4'
      }}>
        Ecco un esercizio semplice per la tua postura, soprattutto se passi ore seduto alla scrivania.
      </p>
      <div className="video-container" style={{ 
        boxShadow: '0 10px 30px rgba(0,0,0,0.4)', 
        border: 'none',
        borderRadius: '0',
        width: '100%'
      }}>
        <iframe
          src="https://www.youtube.com/embed/r9pZpyjRhaI?modestbranding=1&rel=0&showinfo=0"
          title="Posture Exercise"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ExerciseSection;
