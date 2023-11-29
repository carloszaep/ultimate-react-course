import Link from "next/link";

function LinkButton({ children, to }) {
    return (
        <Link href={to} className="text-sm text-blue-500 hover:text-blue-700">{children}</Link>
    );
}

export default LinkButton;