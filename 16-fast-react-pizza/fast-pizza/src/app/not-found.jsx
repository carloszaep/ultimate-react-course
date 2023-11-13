import Link from "next/link";

function NotFound() {


    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>%MESSAGE%</p>
            <Link href={'/'}>&larr; Go back</Link>
        </div>
    );
}

export default NotFound;
