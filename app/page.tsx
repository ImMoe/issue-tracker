import React from 'react';
import Pagination from './components/Pagination';

const Home = () => {
  return <Pagination itemCount={100} pageSize={10} currentPage={10} />;
};

export default Home;
