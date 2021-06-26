import { useStateValue } from "../../store/StateProvider";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./subtotal/SubTotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no item in your basket. To buy one or more item, click
              "Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">basket list</h2>
            {basket.map((item) => (
              <CheckoutProduct key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
