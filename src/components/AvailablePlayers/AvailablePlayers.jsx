import React, { use } from 'react';

const AvailablePlayers = ({ playerPromise }) => {
    const players = use(playerPromise);
    console.log(players)
    return (
        <div className='max-w-[1440px] mx-auto my-10'>
            <h2>players : {players.length}</h2>
        </div>
    );
};

export default AvailablePlayers;