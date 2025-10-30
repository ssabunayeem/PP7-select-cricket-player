import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const playerFetch = async () => {
  const res = await fetch('./players.json');
  return res.json()
}
const playerPromise = playerFetch()


function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className=' max-w-[1240px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Available Players</h1>

        <div className='font-bold'>

          <button
            onClick={() => setToggle(true)}
            className={`border border-gray-300 rounded-l-xl border-r-0 ${toggle === true ? 'bg-amber-300' : ''} py-2 px-8`}>Available
          </button>

          <button
            onClick={() => setToggle(false)}
            className={`border border-gray-300 rounded-r-xl border-l-0 ${toggle === false ? 'bg-amber-300' : ''} py-2 px-8`}>Selected <span>(0)</span>
          </button>

        </div>

      </div>

      {
        toggle === true
          ? <Suspense
            fallback={
              <div className="max-w-[1240px] mx-auto my-10">
                <span className="loading loading-dots loading-xl w-[70px]"></span>
              </div>
            }>
            <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
          </Suspense>

          : <SelectedPlayers purchasedPlayers={purchasedPlayers} ></SelectedPlayers>
      }






    </>
  )
}

export default App
