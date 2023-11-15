import Link from 'next/link';
import React from 'react';
import SearchOrder from '../order/SearchOrder';

function Header() {
    return (
        <header>
            <Link href={'/'}>Fast React Pizza</Link>
            <SearchOrder />
            <p>Carlos</p>
        </header>
    );
}

export default Header;