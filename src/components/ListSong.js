import React, { useContext } from 'react';
import {IoMdDownload} from 'react-icons/io'
import { Songs } from './Context';

function ListSong(props) {
    const DataSongs = useContext(Songs)
    return (
        <div className='col-span-2'>
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
                        <tr key={index}>
                            <td className='text-center'>{song.id}</td>
                            <td className='text-center'>{song.name}</td>
                            <td className='text-center'>{song.author}</td>
                            <td className='text-center'>
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