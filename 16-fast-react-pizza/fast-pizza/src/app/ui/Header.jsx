import Link from 'next/link';
import React from 'react';

function Header() {
    return (
        <header>
            <Link href={'/'}>Fast React Pizza</Link>
            <p>Carlos</p>
        </header>
    );
}

export default Header;