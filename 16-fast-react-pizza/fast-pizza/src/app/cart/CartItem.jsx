// 'use client'
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { formatCurrency } from "../utils/helpers";
import { decreaseItemQuantity, deleteItem, increaseItemQuantity } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch()

  const handlerDeleteItem = () => {
    dispatch(deleteItem(pizzaId))
  }

  const handlerDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId))
  }
  const handlerIncreaseQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId))

  }

  return (
    <li className="py-3">
      <p className="mb-1 px-4">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between px-4 text-sm">
        <p className="text-small font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex gap-1 items-center md:gap-3">
          <Button type='round' onClick={handlerIncreaseQuantity}>+</Button>
          <span>{quantity}</span>
          <Button type='round' onClick={handlerDecreaseQuantity}>-</Button>
        </div>
        <Button type='small' onClick={handlerDeleteItem}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
