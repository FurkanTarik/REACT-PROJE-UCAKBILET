import React from 'react';
import { Card } from 'antd';
import './FlightCard.css';

const FlightCard = ({ flight }) => {
  return (
    <Card className="flight-card">
      <p><strong>Kalkış:</strong> {flight.departure}</p>
      <p><strong>Varış:</strong> {flight.arrival}</p>
      <p><strong>Tarih:</strong> {flight.date}</p>
      <p><strong>Havayolu:</strong> {flight.airline}</p>
      <p><strong>Aktarmasız:</strong> {flight.direct ? 'Evet' : 'Hayır'}</p>
      <p><strong>Fiyat:</strong> {flight.price} TL</p>
      <p><strong>Uçuş Süresi:</strong> {flight.duration} dk</p>
    </Card>
  );
};

export default FlightCard;
