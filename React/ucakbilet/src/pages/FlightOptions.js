import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FlightOptions.css';

const FlightOptions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flights, filters } = location.state || {};

  const handleSelectFlight = (flight) => {
    localStorage.setItem('selectedFlight', JSON.stringify(flight));
    localStorage.setItem('selectedFilters', JSON.stringify(filters));
    navigate('/ucak');
  };

  if (!filters) {
    return <div className="error-message">Uçuş bilgileri bulunamadı. Lütfen tekrar arama yapın.</div>;
  }

  return (
    <div className="flight-options-container">
      <h1>Uçuş Seçenekleri</h1>
      <div className="flight-details">
        <p><strong>Kalkış Yeri:</strong> {filters.departure}</p>
        <p><strong>Varış Yeri:</strong> {filters.arrival}</p>
        <p><strong>Havayolu Şirketi:</strong> {filters.airline}</p>
        <p><strong>Uçuş Türü:</strong> {filters.direct === 'direct' ? 'Aktarmasız' : 'Aktarmalı'}</p>
      </div>
      <div className="flight-options">
        {flights.map((flight, index) => (
          <div key={index} className="flight-option" onClick={() => handleSelectFlight(flight)}>
            <h2>Uçuş {index + 1}</h2>
            <p>Fiyat: {flight.price.toFixed(2)} TL</p>
            <p>Süre: {flight.duration} saat</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightOptions;
