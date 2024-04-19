import React, { useState } from 'react';
import ReusableForm from './Pages/Resuableform';
import './Css/form.css';
function App() {
  const [userDataList, setUserDataList] = useState([]);
  const [productDataList, setProductDataList] = useState([]);

  const handleUserSubmit = (data) => {
    setUserDataList([...userDataList, data]);
  };

  const handleProductSubmit = (data) => {
    setProductDataList([...productDataList, data]);
  };

  return (
    <div className="App">
      <h1>User Form</h1>
      <ReusableForm fields={[
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { 
          name: 'role', 
          label: 'Role', 
          type: 'select', 
          required: true, 
          options: ['Admin', 'User', 'Guest']
        },
      ]} onSubmit={handleUserSubmit} />

      <h2>Submitted User Data</h2>
      <div className="formDataList">
        {userDataList.map((data, index) => (
          <pre key={index}>{JSON.stringify(data, null, 2)}</pre>
        ))}
      </div>

      <h1>Product Form</h1>
      <ReusableForm fields={[
        { name: 'productName', label: 'Product Name', type: 'text', required: true },
        { name: 'price', label: 'Price', type: 'number', required: true },
        { name: 'category', label: 'Category', type: 'text', required: false },
      ]} onSubmit={handleProductSubmit} />

      <h2>Submitted Product Data</h2>
      <div className="formDataList">
        {productDataList.map((data, index) => (
          <pre key={index}>{JSON.stringify(data, null, 2)}</pre>
        ))}
      </div>
    </div>
  );
}

export default App;