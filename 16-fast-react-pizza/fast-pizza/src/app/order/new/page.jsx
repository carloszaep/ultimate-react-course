'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { newOrder } from "./actions";
import Button from "@/app/ui/Button";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from '@/app/cart/cartSlice';
import EmptyCart from '@/app/cart/EmptyCart';
import { formatCurrency } from '@/app/utils/helpers';






function CreateOrder() {
  const [state, formAction] = useFormState(newOrder, null)
  const status = useFormStatus();
  const userName = useSelector(state => state.user.username)
  const cart = useSelector(getCart)
  const totalPrice = useSelector(getTotalCartPrice)



  if (!cart.length) return <EmptyCart />





  return (
    <div className="py-6 px-4">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <form action={formAction}>
        <div className="mb-4 text-center text-red-700 bg-red-100 rounded-md ">
          {state}
        </div>
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input" type="text" name="customer" required defaultValue={userName} />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>

          <input className="input" type="tel" name="phone" required />

        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>

          <input className="input" type="text" name="address" required />

        </div>

        <div className="mb-12 flex gap-5 items-center">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
          // value={withPriority}
          // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type='primary' disabled={status.pending} >
            Order now {formatCurrency(totalPrice)}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
