import React, { useContext, useState } from 'react';
import Footer from '../components/Footer';
import './Consoles.css';
import SortBy from '../components/SortBy';
import { AddItemContext } from '../Context/ContextShare';
import Item from '../components/Item/Item';

function Consoles() {
  const { products } = useContext(AddItemContext);
  const [priceRange, setPriceRange] = useState('');
  const [accessories, setAccessories] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [searchKey, setSearchKey] = useState("");

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
    console.log('Filtering by price range: ' + event.target.value);
  };

  const handleAccessoryChange = (accessory) => {
    const updatedAccessories = [...accessories];
    const index = updatedAccessories.indexOf(accessory);

    if (index === -1) {
      updatedAccessories.push(accessory);
    } else {
      updatedAccessories.splice(index, 1);
    }

    setAccessories(updatedAccessories);
    console.log('Filtering by accessories: ', updatedAccessories);
  };

  const handleSortChange = (sortType) => {
    console.log('Sorting by: ', sortType);
    setSortOrder(sortType);
  };

  const filteredProducts = products.filter((product) =>
  product.category.toLowerCase() === "console" &&
  product.name.toLowerCase().includes(searchKey.toLowerCase()) &&
  (accessories.length === 0 || accessories.some(acc => product.name.toLowerCase().includes(acc))) &&
  (priceRange === '' || (parseFloat(product.new_price) <= parseFloat(priceRange)))
);


  console.log('Filtered Products:', filteredProducts);

  const sortedProducts = [...filteredProducts];

  if (sortOrder === "highToLow") {
    sortedProducts.sort((a, b) => parseFloat(b.new_price) - parseFloat(a.new_price));
  } else if (sortOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => parseFloat(a.new_price) - parseFloat(b.new_price));
  }
  return (
    <>
      <div className="content">
        
        <div className="mt-3 w-25">
          <input className='form-control mt-5'
            value={searchKey}
            onChange={e => setSearchKey(e.target.value)}
            type="text"
            placeholder="Search..."
          />
          
        </div>
        
        <div className="sort-container">
          <SortBy onChange={handleSortChange} value={sortOrder} />
        </div>
       
        <div className="main-content w-100">
          {/* Sidebar filter */}
          <div className="sidebar">
            <div className="filter">
              <h4>Filter</h4>
              <h6>Price</h6>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange}
                onChange={handlePriceRangeChange}
              />
              <p>Rs {priceRange}</p>
            </div>
            <div className="filter">
              <h6>Accessories</h6>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="vr"
                  onChange={() => handleAccessoryChange('vr')}
                />
                VR
              </label>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="controller"
                  onChange={() => handleAccessoryChange('controller')}
                />
                Controller
              </label>
            </div>
          </div>
          {/* Main content */}
          
          <div className="item-list">
            {sortedProducts.length > 0 ? (
              <div className="item-grid">
                {sortedProducts.map((item, i) => (
                  <div key={i} className="item">
                    <Item
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>
      <Footer navigation />
    </>
  );
}

export default Consoles;
