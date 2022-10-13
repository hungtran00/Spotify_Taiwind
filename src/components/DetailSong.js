import React, { useContext } from 'react';
import { Songs } from '../Context';

function DetailSong(props) {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-700 font-bold pb-2'>Now Playing</h2>
            <p className=' text-xl text-gray-400'>{song.name}</p>
            <div className='w-[240px] m-auto mt-[30px]'>
                <img className='' src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className='flex mt-[30px] justify-evenly items-center mx-4'>
                <img className='w-[70px] rounded-full' src={song.links.images[1].url} alt="avatar" />
                <span className='text-xl text-white'>{song.name}</span>
            </div>
        </div>
    );
}

export default DetailSong;