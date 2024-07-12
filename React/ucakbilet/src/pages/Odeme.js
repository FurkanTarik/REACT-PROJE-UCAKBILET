import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Odeme.css';

const Odeme = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const validateCardHolderName = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Lütfen kart sahibinin adını ve soyadını girin!'));
    }
    const nameRegex = /^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/; // Sadece harfler ve boşluk var
    if (!nameRegex.test(value)) {
      return Promise.reject(new Error('Kart sahibi adı ve soyadı sadece harflerden oluşmalıdır!'));
    }
    return Promise.resolve();
  };

  const validateCardNumber = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Lütfen kart numaranızı girin!'));
    }
    const cardNumberRegex = /^\d{16}$/; // Sadece 16 hane 
    if (!cardNumberRegex.test(value)) {
      return Promise.reject(new Error('Kart numarası 16 haneli olmalıdır!'));
    }
    return Promise.resolve();
  };

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    const trimmedValue = value.replace(/\D/g, '').slice(0, 16);
    e.target.value = trimmedValue;
  };

  const validateExpiryDate = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Lütfen son kullanma tarihini girin!'));
    }
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY formatı
    const [month, year] = value.split('/');
    const currentYear = new Date().getFullYear() % 100;
    if (!expiryDateRegex.test(value) || parseInt(year, 10) < 25 || (parseInt(year, 10) === currentYear && parseInt(month, 10) < new Date().getMonth() + 1)) {
      return Promise.reject(new Error('Son kullanma tarihi MM/YY formatında olmalıdır!'));
    }
    return Promise.resolve();
  };

  const handleExpiryDateChange = (e) => {
    const { value } = e.target;
    let trimmedValue = value.replace(/\D/g, '').slice(0, 4);
    if (trimmedValue.length > 2) {
      trimmedValue = `${trimmedValue.slice(0, 2)}/${trimmedValue.slice(2)}`;
    }
    e.target.value = trimmedValue;
  };

  const validateCVV = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Lütfen CVV girin!'));
    }
    const cvvRegex = /^\d{3}$/; // Sadece 3 haneli
    if (!cvvRegex.test(value)) {
      return Promise.reject(new Error('CVV 3 haneli olmalıdır!'));
    }
    return Promise.resolve();
  };

  const handleCVVChange = (e) => {
    const { value } = e.target;
    const trimmedValue = value.replace(/\D/g, '').slice(0, 3);
    e.target.value = trimmedValue;
  };

  const onFinish = (values) => {
    message.success('Ödeme başarılı!');
    navigate('/tesekkur');
  };

  return (
    <div className="odeme-container">
      <Form form={form} onFinish={onFinish} className="odeme-form">
        <h1>Ödeme Yap</h1>
        <Form.Item
          name="cardHolderName"
          rules={[{ required: true, validator: validateCardHolderName }]}
        >
          <Input placeholder="Kart Sahibinin Adı Soyadı" />
        </Form.Item>

        <Form.Item
          name="cardNumber"
          rules={[{ required: true, validator: validateCardNumber }]}
        >
          <Input
            placeholder="Kart Numarası"
            onChange={handleCardNumberChange}
            maxLength={16}
          />
        </Form.Item>

        <Form.Item
          name="expiryDate"
          rules={[{ required: true, validator: validateExpiryDate }]}
        >
          <Input
            placeholder="Son Kullanma Tarihi (MM/YY)"
            onChange={handleExpiryDateChange}
            maxLength={5} // MM/YY formatı o yüzden 5 hane 
          />
        </Form.Item>

        <Form.Item
          name="cvv"
          rules={[{ required: true, validator: validateCVV }]}
        >
          <Input
            placeholder="CVV"
            onChange={handleCVVChange}
            maxLength={3} // CVV 3 hane
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Ödeme Yap
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Odeme;
