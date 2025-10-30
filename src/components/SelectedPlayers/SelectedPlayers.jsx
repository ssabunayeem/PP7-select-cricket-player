import React from 'react';
import SelectedPlayersItem from '../SelectedPlayersItem/SelectedPlayersItem';

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
    console.log(purchasedPlayers);
    return (
        <div className='max-w-[1240px] mx-auto my-10'>

            {
                purchasedPlayers.map(player => <SelectedPlayersItem key={player.player_name} removePlayer={removePlayer} player={player}></SelectedPlayersItem>)
            }

        </div>
    );
};

export default SelectedPlayers;