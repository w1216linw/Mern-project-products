import { useState } from 'react';
import axios from 'axios';
import '../styles/listItem.css'

const ListItem = () => {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [shipping, setShipping] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');

  const handleSubmit = (e) => {
    const newItem = {title,price};
    e.preventDefault();

    quantity && (newItem.quantity = quantity);
    shipping && (newItem.shipping = shipping);
    description && (newItem.description = description);
    picture && (newItem.picture = picture);

    axios.post('/api/products', {...newItem})
      .then(response => {
        setTitle('');
        setPrice('');
        setQuantity('');
        setShipping('');
        setDescription('');
        setPicture('');
      })
      .catch(error => console.log(error.message))
  }

  return (
    <div className="form-container">
      <div className="form-title">
        <h2>List a new Item</h2>
      </div>
      <form onSubmit={handleSubmit} className='item-form'>
        <div className="form-section">
          <label htmlFor="item-title" className="form-label">Title</label>
          <input type="text" className="form-control" name='item-title' id='item-title' value={title} required
            onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-section">
          <label htmlFor="item-price" className="form-label">Price</label>
          <input type="number" className="form-control" name='item-price' id='item-price' value={price} required
            placeholder='$' onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-section">
          <label htmlFor="item-quantity" className="form-label">Quantity</label>
          <input type="number" className="form-control" name='item-quantity' id='item-quantity' value={quantity}
            placeholder='e.g. 2' onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div className="form-section">
          <label htmlFor="item-shipping" className="form-label">Shipping</label>
          <input type="text" className="form-control" name='item-shipping' id='item-shipping' value={shipping}
            placeholder='e.g. Local Pick, Shipping 3-5 days with USPS, etc.' onChange={(e) => setShipping(e.target.value)} />
        </div>
        <div className="form-section">
          <label htmlFor="item-description" className="form-label">Description</label>
          <input type="text" className="form-control" name='item-description' id='item-description' value={description}
            placeholder='e.g. Brand new item' onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className='form-section'>
          <label className='form-label' for="img">Cover Image</label>
          <input type="url" className='form-control' id="img" name="img" placeholder='e.g. www.pic.com' value={picture} onChange={(e) => setPicture(e.target.value)}/>
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default ListItem;