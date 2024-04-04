import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const coffees = [
    { id: 1, name: "Espresso", price: 3.5 },
    { id: 2, name: "Cappuccino", price: 4.0 },
    { id: 3, name: "Latte", price: 4.5 },
    { id: 4, name: "Mocha", price: 5.0 }
  ];

  const handleCoffeeSelection = (coffee) => {
    setSelectedCoffee(coffee);
  };

  const handleOrder = () => {
    if (selectedCoffee) {
      setOrderPlaced(true);
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header style={{backgroundColor: "#8B4513"}}>
        <h1>Coffee Shop</h1>
        <nav>
          <button onClick={() => handleNavigation('home')}>Home</button>
          <button onClick={() => handleNavigation('menu')}>Menu</button>
          <button onClick={() => handleNavigation('about')}>About Cafe</button>
        </nav>
      </header>
      <main>
        {currentPage === 'home' && (
          <div className="home">
            <h2>Welcome to Coffee Shop</h2>
            <p>Enjoy our delicious coffee varieties!</p>
          </div>
        )}
        {currentPage === 'menu' && (
          <div className="container">
            <div className="menu">
              <h2>Menu</h2>
              <ul>
                {coffees.map(coffee => (
                  <li key={coffee.id} onClick={() => handleCoffeeSelection(coffee)}>
                    <span>{coffee.name}</span>
                    <span>${coffee.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-details">
              <h2>Order Details</h2>
              {selectedCoffee && (
                <div className="selected-coffee">
                  <h3>{selectedCoffee.name}</h3>
                  <p>${selectedCoffee.price}</p>
                </div>
              )}
              <button onClick={handleOrder} disabled={!selectedCoffee}>
                Place Order
              </button>
              {orderPlaced && (
                <div className="order-success">
                  <p>Your order of {selectedCoffee.name} has been placed!</p>
                </div>
              )}
            </div>
          </div>
        )}
        {currentPage === 'about' && (
          <div className="about">
            <h2>About Cafe</h2>
            <p>Welcome to our cozy cafe! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;