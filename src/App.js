import React from 'react';
import './App.css';
import OrderCount from './components/OrderCount';
import OrderPrice from './components/OrderPrice';
import Customer from './components/Customer';
function App() {
  return (
    <div className='container-fluid mt-3 p-2'>
      <h1 className='text-center'>RevTap Assignment</h1>
      <div className='row d-flex justify-content-around'>
        <div className='col-md-5 bg-light p-1'>
          <OrderCount></OrderCount>
        </div>
        <div className='col-md-5 bg-light p-1'>
          <OrderPrice></OrderPrice>
        </div>
      </div>
      <div className='p-2'>
        <Customer></Customer>
      </div>
    </div>
  );
}

export default App;
