import Link from 'next/link';
import React from 'react';
import SearchOrder from '../order/SearchOrder';
import Username from '../user/Username';

function Header() {
    return (
        <header className='flex items-center justify-between bg-yellow-500 uppercase px-4 py-4 border-b border-stone-200 sm:px-6'>
            <Link className="tracking-[5px]" href={'/'}>Fast React Pizza</Link>
            <SearchOrder />
            <Username />
        </header>
    );
}

export default Header;