import React, { useContext, useEffect, useState } from 'react';
import {IoMdDownload} from 'react-icons/io'
import { Songs } from '../Context';

function ListSong(props) {
    const {DataSongs, handleSetSong, song } = useContext(Songs)
    const [idSong, setIdSong] = useState(0)
    const handleClick = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setIdSong(song.id)
    },[song])
    return (
        <div className='col-span-2 overflow-y-scroll'>
            <table className='table-auto w-full'>
                <thead className='text-white h-12'>
                    <tr>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Title</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]'><IoMdDownload/></th>
                    </tr>
                </thead>
                <tbody>
                {DataSongs.map((song, index) => (
                    <tr
                    key={index}
                    className={` h-10 cursor-pointer bg-gray-500 hover:bg-slate-400 ${idSong === song.id && 'bg-slate-400'}` }
                    onClick={() => {handleClick(song.id)}}
                    >
                        <td className="text-center">{song.id}</td>
                        <td>{song.name}</td>
                        <td className="text-center">{song.author}</td>
                        <td className="text-center">
                            <a href={song.url}>
                                <IoMdDownload/>
                            </a>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default ListSong;