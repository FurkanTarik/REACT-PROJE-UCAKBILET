import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Select, DatePicker, Input, Slider, Row, Col } from 'antd';
import './Flights.css';

const { Option } = Select;

const Flights = () => {
  const [form] = Form.useForm();
  const [airports, setAirports] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [departureOptions, setDepartureOptions] = useState([]);
  const [arrivalOptions, setArrivalOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAirports = JSON.parse(localStorage.getItem('airports'));
    const storedAirlines = JSON.parse(localStorage.getItem('airlines'));

    setAirports(storedAirports || []);
    setAirlines(storedAirlines || []);
    setDepartureOptions(storedAirports || []);
    setArrivalOptions(storedAirports || []);
  }, []);

  const disabledDate = (current) => {
    return current && current < new Date().setHours(0, 0, 0, 0);
  };

  const getRandomDuration = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomPrice = (maxPrice) => {
    return Math.floor(Math.random() * maxPrice * 0.9) + maxPrice * 0.1; 
  };

  const onFinish = (values) => {
    const flights = Array(3).fill(null).map(() => ({
      duration: getRandomDuration(values.durationRange[0], values.durationRange[1]),
      price: getRandomPrice(values.price)
    }));

    navigate('/flight-options', { state: { filters: values, flights } });
  };

  const handleDepartureChange = (value) => {
    const filteredArrivalOptions = airports.filter((airport) => airport !== value);
    setArrivalOptions(filteredArrivalOptions);
  };

  const handleArrivalChange = (value) => {
    const filteredDepartureOptions = airports.filter((airport) => airport !== value);
    setDepartureOptions(filteredDepartureOptions);
  };

  return (
    <div className="flights-container">
      <Form form={form} onFinish={onFinish} className="flights-form">
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="departure"
              label="Kalkış Yeri"
              rules={[{ required: true, message: 'Lütfen kalkış yeri seçin!' }]}
            >
              <Select placeholder="Kalkış Yeri Seçin" onChange={handleDepartureChange}>
                {departureOptions.map((airport) => (
                  <Option key={airport} value={airport}>
                    {airport}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="arrival"
              label="Varış Yeri"
              rules={[{ required: true, message: 'Lütfen varış yeri seçin!' }]}
            >
              <Select placeholder="Varış Yeri Seçin" onChange={handleArrivalChange}>
                {arrivalOptions.map((airport) => (
                  <Option key={airport} value={airport}>
                    {airport}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="date"
              label="Tarih"
              rules={[{ required: true, message: 'Lütfen tarih seçin!' }]}
            >
              <DatePicker placeholder="Tarih Seçin" disabledDate={disabledDate} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              name="airline"
              label="Havayolu Şirketi"
              rules={[{ required: true, message: 'Lütfen havayolu şirketi seçin!' }]}
            >
              <Select placeholder="Havayolu Şirketi Seçin">
                {airlines.map((airline) => (
                  <Option key={airline} value={airline}>
                    {airline}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="direct"
              label="Uçuş Türü"
              rules={[{ required: true, message: 'Lütfen uçuş türü seçin!' }]}
            >
              <Select placeholder="Uçuş Türü Seçin">
                <Option value="direct">Aktarmasız</Option>
                <Option value="transfer">Aktarmalı</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="price"
              label="Fiyat"
              rules={[{ required: true, message: 'Lütfen fiyat girin!' }]}
            >
              <Input placeholder="Fiyat Girin" type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="durationRange" label="Uçuş Süresi">
              <Slider range defaultValue={[0, 24]} max={24} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button type="primary" htmlType="submit" style={{ marginTop: '40px' }}>
              Ara
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Flights;
