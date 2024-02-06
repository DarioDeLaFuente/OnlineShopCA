import { Link } from 'react-router-dom';
import { useCart } from '../Components/cart/CartContext';
import Cart from '../Components/cart/Cart';

const CheckoutPage = () => {
  const { cart } = useCart();
  console.log('Cart data:', cart);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <Cart cart={cart} />
      <div>
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
      <Link to="/checkout-success">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
