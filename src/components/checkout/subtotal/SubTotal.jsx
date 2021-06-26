import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../store/StateProvider";
import { getBasketTotal } from "../../../store/reducer";
import "./SubTotal.css";

function SubTotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="₹"
      />
      <button className="subtotal__button">Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
