import React from 'react';
import {BsSpotify} from 'react-icons/bs'

function Header(props) {
    return (
        <div className=' flex h-24 bg-slate-800 text-white justify-center pt-[35px] text-2xl'>
            <BsSpotify className='mr-4 text-3xl'/>
            Spotify
        </div>
    );
}

export default Header;