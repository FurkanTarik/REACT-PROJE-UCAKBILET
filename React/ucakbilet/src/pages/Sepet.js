import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sepet.css';

const Sepet = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [flightDuration, setFlightDuration] = useState(0);
  const [flightPrice, setFlightPrice] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const filters = JSON.parse(localStorage.getItem('selectedFilters'));
    const flight = JSON.parse(localStorage.getItem('selectedFlight'));
    const seats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (filters && flight && seats) {
      setSelectedSeats(seats);
      setSelectedFilters(filters);
      setFlightDuration(flight.duration);
      setFlightPrice(flight.price * seats.length);
    }
  }, []);

  const handlePayment = () => {
    navigate('/odeme');
  };

  return (
    <div className="sepet-container">
      <h1 className="sepet-title">Sepetiniz</h1>
      <div className="flight-details">
        <h2>Uçuş Bilgileri</h2>
        <p><strong>Kalkış Yeri:</strong> {selectedFilters.departure}</p>
        <p><strong>Varış Yeri:</strong> {selectedFilters.arrival}</p>
        <p><strong>Havayolu Şirketi:</strong> {selectedFilters.airline}</p>
        <p><strong>Uçuş Türü:</strong> {selectedFilters.direct === 'direct' ? 'Aktarmasız' : 'Aktarmalı'}</p>
        <p><strong>Seçilen Koltuk Sayısı:</strong> {selectedSeats.length}</p>
        <p><strong>Uçuş Süresi:</strong> {flightDuration} saat</p>
        <p><strong>Fiyat:</strong> {flightPrice} TL</p>
      </div>
      <button className="payment-button" onClick={handlePayment}>Ödeme Yap</button>
    </div>
  );
};

export default Sepet;
