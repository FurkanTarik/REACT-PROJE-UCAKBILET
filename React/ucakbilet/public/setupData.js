const setupData = () => {
    const airports = [
      'İstanbul Havalimanı',
      'Sabiha Gökçen Havalimanı',
      'Ankara Esenboğa Havalimanı',
      'İzmir Adnan Menderes Havalimanı',
      'Antalya Havalimanı',
      'Adana Şakirpaşa Havalimanı',
      'Trabzon Havalimanı'
    ];
  
    const airlines = [
      'Türk Hava Yolları',
      'Pegasus',
      'AnadoluJet',
      'SunExpress'
    ];
  
    const flights = [
      {
        id: 1,
        departure: 'İstanbul Havalimanı',
        arrival: 'Ankara Esenboğa Havalimanı',
        date: '2024-07-15',
        airline: 'Türk Hava Yolları',
        direct: true,
        price: 450,
        duration: 70
      },
      {
        id: 2,
        departure: 'Sabiha Gökçen Havalimanı',
        arrival: 'İzmir Adnan Menderes Havalimanı',
        date: '2024-07-16',
        airline: 'Pegasus',
        direct: true,
        price: 300,
        duration: 60
      },
      
    ];
  
    localStorage.setItem('airports', JSON.stringify(airports));
    localStorage.setItem('airlines', JSON.stringify(airlines));
    localStorage.setItem('flights', JSON.stringify(flights));
  };
  
  setupData();
  