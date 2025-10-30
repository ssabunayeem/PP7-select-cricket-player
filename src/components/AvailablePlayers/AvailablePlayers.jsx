import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playerPromise, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const players = use(playerPromise);
    // console.log(players);
    return (
        <div className='max-w-[1240px] mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-15 px-5 md:px-0'>

            {
                players.map(player =>
                    <PlayerCard
                        purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}
                        availableBalance={availableBalance} setAvailableBalance={setAvailableBalance}
                        key={player.player_name}
                        player={player}></PlayerCard>)
            }



        </div >
    );
};

export default AvailablePlayers;