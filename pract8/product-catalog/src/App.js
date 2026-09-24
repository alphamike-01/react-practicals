import React from "react";
import "./App.css";

function App() {

  const products = [

    {
      id: 1,
      name: "Laptop",
      price: 65000,
      category: "Electronics",
      image: "https://via.placeholder.com/150"
    },

    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
      image: "https://via.placeholder.com/150"
    },

    {
      id: 3,
      name: "Headphones",
      price: 3000,
      category: "Accessories",
      image: "https://via.placeholder.com/150"
    },

    {
      id: 4,
      name: "Smart Watch",
      price: 12000,
      category: "Wearables",
      image: "https://via.placeholder.com/150"
    }

  ];

  return (

    <div className="container">

      <h1>Product Catalog</h1>

      <div className="product-container">

        {

          products.map((product) => (

            <div className="card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h2>{product.name}</h2>

              <p><strong>Category:</strong> {product.category}</p>

              <p><strong>Price:</strong> ₹{product.price}</p>

              <button>Buy Now</button>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default App;