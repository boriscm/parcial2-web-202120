import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';


export const Home = ({ searchKey, lang}) => {
  const { report, home, gallery } =lang;
  const [products, setProducts] = useState([]);
  var ruta = "http://localhost:3001/api/products";
  console.log(searchKey);
  if(searchKey === "")
  {
    ruta = "http://localhost:3001/api/products";
  }
  else{
    ruta+="?q="+searchKey;
  }
  console.log(ruta);
  useEffect(() => {
    fetch(ruta)
    .then((resp) => resp.json())
    .then((data)=> {
      console.log("dato", data);
      setProducts(data);
    });
  });



  return (
    <section id='home'>
      <div className='home-container'>
        <h1>{gallery}</h1>
        <div className='home-card'>

            {products.map(item => <Card props = {item}/>)
            }

        </div>
      </div>
    </section>
  );
};
