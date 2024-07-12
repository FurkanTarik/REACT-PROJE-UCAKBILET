import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import './Tesekkur.css';

const Tesekkur = () => {
  const navigate = useNavigate();

  const handleOk = () => {
    navigate('/home');
  };

  return (
    <div className="tesekkur-container">
      <h1>Ödeme Yapıldı</h1>
      <p>Rezervasyonunuz oluşturulmuştur.</p>
      <Modal
        title="Rezervasyon Bilgileriniz"
        visible={true}
        onCancel={handleOk}
        footer={[
          <Button key="ok" type="primary" onClick={handleOk}>
            Tamam
          </Button>
        ]}
      >
        <p>Rezervasyon bilgileriniz mailinize gönderilmiştir.</p>
      </Modal>
    </div>
  );
};

export default Tesekkur;
