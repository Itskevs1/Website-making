import React from 'react';
import './Stores.css';
import { useNavigate } from 'react-router-dom';

const storeData = [
  { image: 'cat1.jpg', title: 'France Bistro', route: '/store1' },
  { image: 'cat2.jpg', title: 'FASPeCC', route: '/store2' },
  { image: 'cat3.jpg', title: 'France Bistro', route: '/store3' },
  { image: 'cat4.jpg', title: 'France Bistro', route: '/store4' },
  { image: 'cat5.jpg', title: 'FASPeCC', route: '/store5' },
  { image: 'cat6.jpg', title: 'France Bistro', route: '/store6' },
];

const Stores = () => {
  const navigate = useNavigate();

  const handleTabClick = (path) => {
    navigate(path);
  };

  return (
    <div className="stores-container">
      <hr className="stores-divider" />
      <div className="breadcrumb">USTP &gt; Cafeteria</div>

      <div className="stores-tabs">
        <span className="tab active" onClick={() => handleTabClick('/stores')}>All stores</span>
        <span className="tab" onClick={() => handleTabClick('/availabletoday')}>Available Today</span>
      </div>

      <div className="store-grid">
        {storeData.map((store, index) => (
          <div
            key={index}
            className="store-card"
            onClick={() => navigate(store.route)}
          >
            <img
              src={`/categorypic/${store.image}`}
              alt={store.title}
              className="store-image"
            />
            <div className="store-title">{store.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
