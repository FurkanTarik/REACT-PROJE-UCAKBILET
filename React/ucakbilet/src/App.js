import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Layout, Menu, Button } from 'antd';
import { HomeOutlined, RocketOutlined, LogoutOutlined } from '@ant-design/icons';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Flights from './pages/Flights';
import Odeme from './pages/Odeme';
import Results from './pages/Results';
import Tesekkur from './pages/Tesekkur';
import Ucak from './pages/Ucak';
import FlightOptions from './pages/FlightOptions'; 
import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home/*"
          element={
            <Layout className="layout">
              <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <a href="/home">Anasayfa</a>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<RocketOutlined />}>
                    <a href="/flights">Uçuşlar</a>
                  </Menu.Item>
                </Menu>
                <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout} className="logout-button">
                  Çıkış Yap
                </Button>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Uçak Bilet Sistemi ©2024</Footer>
            </Layout>
          }
        />
        <Route
          path="/flights"
          element={
            <Layout className="layout">
              <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1 }}>
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <a href="/home">Anasayfa</a>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<RocketOutlined />}>
                    <a href="/flights">Uçuşlar</a>
                  </Menu.Item>
                </Menu>
                <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout} className="logout-button">
                  Çıkış Yap
                </Button>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <Flights />
              </Content>
              <Footer style={{ textAlign: 'center' }}>Uçak Bilet Sistemi ©2024</Footer>
            </Layout>
          }
        />
        <Route path="/results" element={<Results />} />
        <Route path="/odeme" element={<Odeme />} />
        <Route path="/tesekkur" element={<Tesekkur />} />
        <Route
          path="/ucak"
          element={
            <Layout className="layout">
              <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <a href="/home">Anasayfa</a>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<RocketOutlined />}>
                    <a href="/flights">Uçuşlar</a>
                  </Menu.Item>
                </Menu>
                <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout} className="logout-button">
                  Çıkış Yap
                </Button>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <Ucak />
              </Content>
              <Footer style={{ textAlign: 'center' }}>Uçak Bilet Sistemi ©2024</Footer>
            </Layout>
          }
        />
        <Route
          path="/flight-options"
          element={
            <Layout className="layout">
              <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1 }}>
                  <Menu.Item key="1" icon={<HomeOutlined />}>
                    <a href="/home">Anasayfa</a>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<RocketOutlined />}>
                    <a href="/flights">Uçuşlar</a>
                  </Menu.Item>
                </Menu>
                <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout} className="logout-button">
                  Çıkış Yap
                </Button>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <FlightOptions />
              </Content>
              <Footer style={{ textAlign: 'center' }}>Uçak Bilet Sistemi ©2024</Footer>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
