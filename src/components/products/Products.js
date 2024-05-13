import React, { Component } from 'react';
import ProductCard from './ProductCard';
import achatch1 from '../../images/achar1.png';
import achatch2 from '../../images/achar2.jpg';
import achatch3 from '../../images/achar3.jpg';
import achatch4 from '../../images/achar4.jpg';
import chili1 from '../../images/chili1.png';
import chili2 from '../../images/chili2.png';
import chili3 from '../../images/chili3.png';
import chili4 from '../../images/chili4.png';

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      category: 'All',
      loading: false,
    };
  }

  componentDidMount() {
    // Fetch products from API or set them directly here
    const products = [
      { name: "The Jumbo Atchar ", description: "The largest size of Atchar we have on our roster. Perfect for if you want to feed the family for a month or are hosting a get-together.<br />5L", imageUrl: achatch1, price: 500.00, category: 'atchar' },
      { name: "The Mini Atchar", description: "Smallest size of Atchar we have availlable on our roster of Atchars. Great for quick toppings!<br />450g", imageUrl: achatch2, price: 40.00, category: 'atchar' },
      { name: "The Atchar Combo", description: "Need Atchar but the Mini is not enough? The Combo is perfect for those looking for that little extra for themselves.<br />500g", imageUrl: achatch3, price:50.00, category: 'atchar' },
      { name: "The Medi Atchar", description: "The medium size of Atchar we offer is what the medium households all deserve. Come try it out!<br />750g", imageUrl: achatch4, price: 80.00, category: 'atchar' },
      { name: "The Medi Chilli", description: "The medium size of Chilli we offer is what the medium households all deserve. Come try it out!<br />750g", imageUrl: chili1, price: 80.00, category: 'chili' },
      { name: "The Chilli Combo", description: "Need Chilli but the Mini is not enough? The Combo is perfect for those looking for that little extra for themselves.<br />500g", imageUrl: chili2, price: 50.00, category: 'chili' },
      { name: "The Jumbo Chiili", description: "The largest size of Chilli we have on our roster. Perfect for if you want to feed the family for a month or are hosting a get-together.<br />5L", imageUrl: chili3, price: 500, category: 'chili' },
      { name: "The Mini Chilli", description: "Smallest size of Chilli we have availlable on our roster of Atchars. Great for quick toppings!<br />450g", imageUrl: chili4, price: 40.00, category: 'chili' }
    ];
    this.setState({ products });
  }

  filterProducts = (category) => {
    this.setState({ category, loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { products, category, loading } = this.state;
    const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

    return (
      <div className="container" style={{ marginTop: '170px' }}>
        <div className="row justify-content-center my-4">
          <div className="col-md-12 text-center">
            <h1 className="products-heading">Browse our tasty products below:</h1>
            <div className="btn-group mt-3 w-50" role="group" aria-label="Category selection">
              <button type="button" className={`btn ${category === 'atchar' ? 'btn-warning active' : 'btn-dark'}`} onClick={() => this.filterProducts('atchar')}>Atchar</button>
              <button type="button" className={`btn ${category === 'chili' ? 'btn-warning active' : 'btn-dark'}`} onClick={() => this.filterProducts('chili')}>Chilli</button>
              <button type="button" className={`btn ${category === 'All' ? 'btn-warning active' : 'btn-dark'}`} onClick={() => this.filterProducts('All')}>All</button>
            </div>
            <hr className="my-4" style={{ borderTop: '2px solid #ffd700' }} />
          </div>
        </div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="row justify-content-center">
            {filteredProducts.map((product, index) => (
              <div key={index} className="col-md-6 mb-4">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Products;