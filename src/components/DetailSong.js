import React from 'react';

function DetailSong(props) {
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-700 font-bold pb-2'>Now Playing</h2>
            <p className=' text-xl text-gray-400'>Sing me to leep</p>
            <div className='w-[240px] m-auto mt-[30px]'>
                <img className='' src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avatar" />
            </div>
            <div className='flex mt-[30px] justify-evenly items-center mx-4'>
                <img className='w-[70px] rounded-full' src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avatar" />
                <span className='text-xl text-white'>Alan Walker</span>
            </div>
        </div>
    );
}

export default DetailSong;