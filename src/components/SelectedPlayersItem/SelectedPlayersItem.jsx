import React from 'react';
import deleteIcon from '../../assets/delete.png';

const SelectedPlayersItem = ({ player, removePlayer }) => {
    console.log(player);

    const handleRemove = () => {
        removePlayer(player);
    }

    return (
        <div className='flex justify-between items-center p-2 pr-5 border border-gray-200 mt-5 rounded-2xl  shadow-lg'>
            <div className='flex justify-between items-center hover:scale-150 transition-transform duration-200'>
                <img className='w-22 h-22 object-cover rounded-2xl' src={player.player_image} alt="" />
                <div className='ml-5 font-semibold'>
                    <h1>{player.player_name}</h1>
                    <p className='text-xs'>{player.playing_role}</p>
                </div>

            </div>

            <div onClick={handleRemove} className='btn btn-soft  hover:scale-150 transition-transform duration-200 bg-white px-1 py-6  rounded-3xl border-0'>
                <img className='w-10 h-10 p-2' src={deleteIcon} alt="delete" />
            </div>
        </div>
    );
};

export default SelectedPlayersItem;