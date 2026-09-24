import { useSelector, useDispatch } from "react-redux";
import { addToCart, increment, decrement, remove } from "./store";

const products = [
  { id: 1, name: "Mechanical Keyboard", price: 2499 },
  { id: 2, name: "Wireless Mouse", price: 999 },
  { id: 3, name: "USB-C Hub", price: 1499 },
  { id: 4, name: "Laptop Stand", price: 1799 },
];

const money = n => `₹${n.toLocaleString("en-IN")}`;

export default function App() {
  const items = useSelector(s => s.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return <main className="app container">
    <h1>Shopping Cart</h1>
    <p>Redux Toolkit · Store · Actions · Reducers</p>
    <div className="layout">
      <section className="panel">
        <h2>Products</h2>
        <div className="products">{products.map(p => <article className="product" key={p.id}>
          <h3>{p.name}</h3><p className="price">{money(p.price)}</p>
          <button className="btn" onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </article>)}</div>
      </section>
      <aside className="panel">
        <h2>Cart ({count})</h2>
        {items.length === 0 ? <p>Your cart is empty.</p> : items.map(i => <div className="cart-row" key={i.id}>
          <strong>{i.name}</strong><span>{money(i.price * i.quantity)}</span>
          <span className="qty"><button onClick={() => dispatch(decrement(i.id))}>−</button> {i.quantity} <button onClick={() => dispatch(increment(i.id))}>+</button></span>
          <button onClick={() => dispatch(remove(i.id))}>×</button>
        </div>)}
        <p className="total">Total: {money(total)}</p>
      </aside>
    </div>
  </main>;
}
