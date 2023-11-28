'use client'
import { useState } from "react";
import { useFormState, useFormStatus } from 'react-dom'
import { newOrder } from "./actions";



const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];


function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const [state, formAction] = useFormState(newOrder, null)
  const status = useFormStatus();



  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <form action={formAction}>
        <div>
          {state}
        </div>
        <div>
          <label>First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
          // value={withPriority}
          // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={status.pending} className="bg-yellow-400 transition-all
           hover:bg-yellow-300 tracking-wide uppercase font-semibold
            text-stone-800 py-3 px-4 inline-block rounded-full focus:outline-none focus:ring
             focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400
             disable:cursor-not-allowed">
            Order now
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
