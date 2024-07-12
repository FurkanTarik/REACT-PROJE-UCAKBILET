import React from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const { Option } = Select;

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(values);
    localStorage.setItem('users', JSON.stringify(users));
    message.success('Kayıt başarılı!');
    navigate('/login');
  };

  const validatePhoneNumber = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Lütfen telefon numaranızı girin!'));
    }
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(value)) {
      return Promise.reject(new Error('Telefon numarası 11 haneli olmalıdır!'));
    }
    return Promise.resolve();
  };

  const validateTcNo = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Lütfen TC Kimlik Numaranızı girin!'));
    }
    const tcRegex = /^[0-9]{11}$/;
    if (!tcRegex.test(value)) {
      return Promise.reject(new Error('TC Kimlik Numarası 11 haneli olmalıdır!'));
    }
    return Promise.resolve();
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    const trimmedValue = value.replace(/\D/g, '').slice(0, 11);
    e.target.value = trimmedValue;
  };

  const handleTcNoChange = (e) => {
    const { value } = e.target;
    const trimmedValue = value.replace(/\D/g, '').slice(0, 11);
    e.target.value = trimmedValue;
  };

  return (
    <div className="register-container">
      <Form
        name="register"
        onFinish={onFinish}
        className="register-form"
      >
        <div className="register-title">Kayıt Ol</div>
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: 'Lütfen adınızı girin!' }]}
        >
          <Input placeholder="Ad" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[{ required: true, message: 'Lütfen soyadınızı girin!' }]}
        >
          <Input placeholder="Soyad" />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          rules={[{ required: true, validator: validatePhoneNumber }]}
        >
          <Input maxLength={11} onChange={handlePhoneNumberChange} placeholder="Telefon Numarası" />
        </Form.Item>

        <Form.Item
          name="tcNo"
          rules={[{ required: true, validator: validateTcNo }]}
        >
          <Input maxLength={11} onChange={handleTcNoChange} placeholder="TC Kimlik Numarası" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Lütfen email adresinizi girin!', type: 'email' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Lütfen kullanıcı adınızı girin!' }]}
        >
          <Input placeholder="Kullanıcı Adı" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}
        >
          <Input.Password placeholder="Şifre" />
        </Form.Item>

        <Form.Item
          name="gender"
          rules={[{ required: true, message: 'Lütfen cinsiyetinizi seçin!' }]}
        >
          <Select placeholder="Cinsiyetinizi seçin">
            <Option value="male">Erkek</Option>
            <Option value="female">Kadın</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Kayıt Ol
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
