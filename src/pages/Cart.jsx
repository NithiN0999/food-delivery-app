import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import CartPage from "./CartPage";
import { Link } from "react-router-dom";

function Cart() {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const handlePayment=()=>{
    if (window.Razorpay) {
      var options = {
        key: 'rzp_test_AWrlyaXOO9ncih',
        key_secret: 'iExGzM7nCvTIo41Rk4iV9kye',
        amount: 10000,
        currency: 'INR',
        name: '',
        description: 'for testing purpose',
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: 'Nithin',
          email: 'arshadsyed2804@gmail.com',
          contact: '8778729928',
        },
        notes: {
          address: 'Razorpay Corporate office',
        },
        theme: {
          color: '#3399cc',
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    } else {
      alert('Razorpay SDK not loaded. Make sure to include the Razorpay script.');
    }

  }
  return (
    <div className="py-32 flex flex-col">
      <div className="bg-orange-200 h-24 text-black text-3xl font-semibold flex items-center justify-center">
        Your Cart
      </div>
      <div className="max-h-[480px] overflow-y-auto mt-10 w-full">
        {cartProducts.length === 0 ? (
          <h6 className="text-center mt-5 text-xl">
            No item added to the cart
          </h6>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <table className="border">
              <tr className=" border-2 border-gray-900">
                <th className="border px-10 py-5">Image</th>
                <th className="border px-5 py-2">Product Title</th>
                <th className="border px-5 py-2">Price</th>
                <th className="border px-5 py-2">Quantity</th>
                <th className="border px-5 py-2">Delete</th>
              </tr>
              {cartProducts.map((item, index) => (
                <CartPage item={item} key={index} />
              ))}
            </table>
          </div>
        )}
      </div>
      <div className="py-10 flex flex-col justify-center items-center">
        {cartProducts.length == 0 ? (
          " "
        ) : (
          <div className="flex flex-col gap-5">
            <span className="text-2xl text-red-500">
              <b className="text-black">{"  "}Subtotal:</b> Rs.{totalAmount}
            </span>
            <p>Texes and shipping will calculate at checkout</p>
            <div className="flex gap-5">
              <Link to="/food" className=" bg-orange-200 text-sm rounded-md px-5 py-2 font-semibold">continue shopping</Link>
              <button className=" bg-orange-200 text-sm rounded-md px-5 py-2 font-semibold" onClick={handlePayment}>Proceed to checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
