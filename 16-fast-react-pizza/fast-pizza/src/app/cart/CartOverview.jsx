import Link from "next/link";

function CartOverview() {
  return (
    <div className='bg-stone-800 text-stone-200 uppercase'>
      <p className='text-stone-300 text-semibold'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link href="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
