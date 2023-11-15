import Link from 'next/link';
import React from 'react';
import SearchOrder from '../order/SearchOrder';
import Username from '../user/Username';

function Header() {
    return (
        <header className='bg-yellow-500 uppercase'>
            <Link className="tracking-[5px]" href={'/'}>Fast React Pizza</Link>
            <SearchOrder />
            <Username />
        </header>
    );
}

export default Header;