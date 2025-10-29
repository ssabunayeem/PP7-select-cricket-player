import React, { use } from 'react';

const AvailablePlayers = ({ playerPromise }) => {
    const players = use(playerPromise);
    console.log(players)
    return (
        <div className='max-w-[1240px] mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-15 px-5 md:px-0'>

            {
                players.map(player =>

                    < div className="card bg-base-100 w-full shadow-xl">
                        <figure className='p-4'>
                            <img className='rounded-xl w-[full] h-[200px] object-cover'
                                src={player.player_image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body my-0 pt-0">
                            <h1 className="font-semibold text-2xl"> 👤{player.player_name}</h1>
                            <div className='flex items-center mb-1'>
                                <p className="text-gray-400 text-lg">🏴 {player.player_country}</p>
                                <button className='btn'>All-Rounder</button>
                            </div>

                            <div className='border-b border-gray-200 mt-0 pt-0'></div>
                            <div className='flex items-center justify-between'>
                                <h2 className="font-bold text-lg">Rating:</h2>
                                <h2 className="font-bold text-lg">{player.rating}</h2>

                            </div>
                            <div className='flex items-center justify-between'>
                                <h2 className="font-semibold text-[16px]"> Left-Hand-Bat </h2>
                                <h2 className="text-gray-500 text-[16px]"> Left-Hand-Bat </h2>

                            </div>
                            <div className='flex items-center justify-between'>
                                <h2 className="font-semibold text-[16px]"> Price: $<span>{player.price}</span> </h2>
                                <button className="btn btn-outline border-gray-300 rounded-lg">Choose Player</button>
                            </div>
                        </div>
                    </div>

                )
            }



        </div >
    );
};

export default AvailablePlayers;