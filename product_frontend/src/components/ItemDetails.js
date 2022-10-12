import { useHomeContext } from '../contexts/homeContext';
import { FaTimes } from 'react-icons/fa'
import '../styles/itemDetails.css';
import { createFactory } from 'react';


const ItemDetails = () => {

  const { isDetailOpen, currentProduct, closeDetail } = useHomeContext();
  const { title, shipping, price, description, quantity, picture } = currentProduct;
  return (
    <div className={`${isDetailOpen ? "item-details show" : 'item-details'}`}>
      <div className="details">
        <div>
          <img src={picture} alt="pictures" />
        </div>
        <div>
          <h3 className='detail-title'>{title}</h3>
          <h4 className='detail-price'><span>price: </span>{price}</h4>
          <p className='detail-shipping'><span>shipping: </span>{shipping}</p>
          <p className='detail-description'><span>description: </span>{description}</p>
          <p className='detail-quantity'><span>quantity: </span>{quantity}</p>
        </div>
      </div>
      <button className='close-btn' onClick={closeDetail}>
        <FaTimes />
      </button>
    </div>
  )
}

export default ItemDetails;