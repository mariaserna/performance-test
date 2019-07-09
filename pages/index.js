import React from 'react';
// import DeviceContext from '../contexts/DeviceContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Health from '../components/Health';

const Home = () => (
  // <DeviceContext.Provider value={props}>
  <>
    <Header />
    <div className="container">
      <Hero />
      <Cards />
      <Health />
    </div>
  </>
  // </DeviceContext.Provider>
);

// Home.getInitialProps = ({
//   req,
// }) => req.client;

export default Home;
