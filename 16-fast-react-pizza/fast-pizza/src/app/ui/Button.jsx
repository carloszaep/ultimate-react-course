import Link from "next/link";

function Button({ children, disabled, to, type }) {



    const base = `bg-yellow-400 transition-all
        hover:bg-yellow-300 tracking-wide uppercase font-semibold
        text-stone-800 inline-block rounded-full focus:outline-none focus:ring
        focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400
        disable:cursor-not-allowed`

    const styles = {
        primary: base + ` px-4 py-3 md:px-6 md:py-4`,
        small: base + ` px-4 py-2 md:px-5 md:py-2.5 text-xs`,
        secondary: `transition-all
        hover:bg-stone-300 hover:text-stone-800 tracking-wide uppercase font-semibold
        text-stone-800 inline-block rounded-full focus:outline-none focus:ring
        focus:ring-stone-300 focus:bg-stone-300 focus:ring-offset-2 active:bg-slate-400
        disable:cursor-not-allowed border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5`
    }

    if (to) return <Link href={to} className={styles[type]}>{children}</Link>
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;