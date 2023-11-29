import Link from "next/link";

function NotFound() {


    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>This page not exist</p>
            <Link href={'/'}>&larr; Go back</Link>
        </div>
    );
}

export default NotFound;
