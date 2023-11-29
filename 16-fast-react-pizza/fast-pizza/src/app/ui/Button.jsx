import Link from "next/link";

function Button({ children, disabled, to }) {

    const className = `bg-yellow-400 transition-all
    hover:bg-yellow-300 tracking-wide uppercase font-semibold
     text-stone-800 py-3 px-4 inline-block rounded-full focus:outline-none focus:ring
      focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400
      disable:cursor-not-allowed pd:px-6 sm:py-4`

    if (to) return <Link href={to} className={className}>{children}</Link>
    return (
        <button disabled={disabled} className={className}>
            {children}
        </button>
    );
}

export default Button;