import Button from "../ui/Button";
import { formatCurrency } from "../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3">
      <p className="mb-1 px-4">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between px-4 text-sm">
        <p className="text-small font-bold">{formatCurrency(totalPrice)}</p>
        <Button type='small'>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
