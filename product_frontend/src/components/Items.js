import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHomeContext } from '../contexts/homeContext';
import '../styles/items.css';

const Items = () => {

  const [products, setProducts] = useState([]);
  const {openDetail} = useHomeContext();

  useEffect(() => {

    const fetchProduct = async () => {
      try {
        const response = await axios.get('/api/products')
        if (response.statusText === 'OK') setProducts(response.data)

        // const response = await fetch('/api/products')
        // const json = await response.json();
        // if(response.ok) {
        //   this.setState({products: json})
        // }

      } catch (error) {
        console.log('Can not fetch the data')
      }
    }

    fetchProduct();
  }, []);

  return (
    <div className='item-container'>
      {
        products.map((product, index) => {
          const { _id, title, price, picture, shipping, createdAt } = product
          let date = new Date(createdAt).getTime();
          let today = new Date().getTime();
          let remainDay = Math.floor((today - date) / (24 * 60 * 60 * 1000))
          let remainHours = Math.floor(((today - date) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));

          return (
            <div className='single-item' key={index} onClick={() => openDetail(product)}>
              <div className="item-cover">
                <img className='item-picture' src={picture} alt="picture of item" />
              </div>
              <h3 className='item-title'>{title}</h3>
              <p className='item-price'>${price}</p>
              <div className="item-hint">
                <p className='item-shipping'>{shipping}</p>
                <p className='item-created-date'>
                  {
                    `${remainDay > 0 ? `${remainDay} days ago` :
                    remainHours > 0 ? `${remainHours} hours ago` : 'New'}`
                  }
                </p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Items;