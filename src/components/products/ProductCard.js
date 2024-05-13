import React from 'react';
import { FaMoneyBillWave } from 'react-icons/fa'; // Import money icon from react-icons
import './Products.css';

const ProductCard = (props) => {
    return (
        <div className="product-card rounded-lg overflow-hidden shadow-md border border-gray-300 hover:shadow-lg transition duration-300">
            <img className="w-full h-auto" src={props.imageUrl} alt="Product" />
            <div className="product-details text-center px-4 py-6">
                <h2 className="card-title">{props.name}</h2>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: props.description }}></p>
                <div className="flex items-center justify-center">
                    <input type="number" className="quantity-input" defaultValue="0" min="0" placeholder="Qty" />
                    <button className="add-to-cart-button">
                        ADD TO CART
                    </button>
                </div>
                <p className="price-text">Price: <FaMoneyBillWave /> R{props.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;