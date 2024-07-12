import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import './Ucak.css';
import ucakImage from '../assets/ucak.png'; // Uçak resmi
import seatImage from '../assets/seat.jpg'; // Koltuk resmi
import seatSelectedImage from '../assets/seat-selected.jpg'; // Seçili koltuk resmi (yeşil)
import seatOccupiedImage from '../assets/seat-selected1.jpg'; // Dolu koltuk resmi (kırmızı )

const Ucak = () => {
  const [seats, setSeats] = useState(
    Array(60).fill(null).map(() => ({ selected: false, occupied: false }))
  );
  const navigate = useNavigate();

  useEffect(() => {
    const newSeats = Array(60).fill(null).map(() => ({
      selected: false,
      occupied: Math.random() < 0.3 
    }));
    setSeats(newSeats);
  }, []);

  const handleSeatClick = (index) => {
    setSeats((prevSeats) => {
      const newSeats = prevSeats.map((seat, i) =>
        i === index && !seat.occupied ? { ...seat, selected: !seat.selected } : seat
      );
      return newSeats;
    });
  };

  const handleOnayla = () => {
    const selectedSeats = seats.filter(seat => seat.selected);
    if (selectedSeats.length === 0) {
      message.warning('Koltuk seçmek zorundasınız!');
      return;
    }
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    navigate('/results');
  };

  return (
    <div className="ucak-container">
      <h1 className="ucak-title">Koltuk Seçimi</h1>
      <div className="ucak-image-container">
        <img src={ucakImage} alt="Uçak" className="ucak-image" />
        <div className="seats-container">
          {seats.map((seat, index) => (
            <img
              key={index}
              src={seat.occupied ? seatOccupiedImage : seat.selected ? seatSelectedImage : seatImage}
              alt={`Seat ${index + 1}`}
              className="seat-image"
              onClick={() => handleSeatClick(index)}
            />
          ))}
        </div>
      </div>
      <button className="confirm-button" onClick={handleOnayla}>Onayla</button>
    </div>
  );
};

export default Ucak;
