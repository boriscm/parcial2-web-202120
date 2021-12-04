import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';


export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
    .then((resp) => resp.json())
    .then((data)=> {
      console.log("dato", data);
      setProducts(data);
    });
  },[]);



  return (
    <section id='home'>
      <div className='home-container'>
        <h1>Gallery</h1>
        <div className='home-card'>

            {products.map(item => <Card props = {item}/>)
            }

        </div>
      </div>
    </section>
  );
};
