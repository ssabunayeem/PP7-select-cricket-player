import React, { useState } from 'react';

const PlayerCard = ({ player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {

    const [isSelected, setIsSelected] = useState(false)


    const handleSelected = (playerData) => {

        const playerPrice = Number(playerData.price.split("USD").join("").split(",").join(""));

        if (availableBalance < playerPrice) {
            alert("not enough money");
            return;
        }

        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasedPlayers([...purchasedPlayers, playerData]);
    }

    return (

        < div className="card bg-base-100 w-full shadow-xl">
            <figure className='p-4'>
                <img className='rounded-xl w-[350px] h-[200px] object-cover'
                    src={player.player_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body my-0 pt-0">
                <h1 className="font-semibold text-2xl"> 👤{player.player_name}</h1>
                <div className='flex items-center mb-1'>
                    <p className="text-gray-400 text-lg">🏴 {player.player_country}</p>
                    <button className='btn'>{player.playing_role}</button>
                </div>

                <div className='border-b border-gray-200 mt-0 pt-0'></div>
                <div className='flex items-center justify-between'>
                    <h2 className="font-bold text-lg">Rating:</h2>
                    <h2 className="font-bold text-lg">{player.rating}</h2>

                </div>
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-[16px]"> Bating style </h2>
                    <h2 className="text-gray-500 text-[16px]"> {player.bating_style} </h2>

                </div>
                <div className='flex items-center justify-between'>
                    <h2 className="font-semibold text-[16px]"> Price: $<span>{player.price}</span> </h2>

                    <button
                        disabled={isSelected}
                        onClick={() => { handleSelected(player) }}
                        className={`btn btn-outline border-gray-300 rounded-lg ${isSelected && 'text-indigo-800 bg-indigo-300'}`}>
                        {isSelected ? "Selected" : " Choose Player"}
                    </button>

                </div>
            </div>
        </div>

    );
};

export default PlayerCard;