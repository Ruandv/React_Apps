import BookingComponent from "./components/BookingComponent"
import { Notifications } from 'react-push-notification';
import './App.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
function App() {
  // const data: Character[] = [
  //   {
  //     "code": "B1", "name": "Garchomp", "longDescription": "When it folds up its body and extends its wings, it looks like a jet plane. It flies at sonic speed", "imageUrl": "./Garchomp.png",
  //     "type": "Dragon/Ground"
  //   },
  //   {
  //     "code": "B22", "name": "Mudkip", "longDescription": "The fin on Mudkip's head acts as highly sensitive radar. Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes.", "imageUrl": "./Mudkip.png",
  //     "type": "Water"
  //   },
  //   {
  //     "code": "B14", "name": "Blastoise", "longDescription": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.", "imageUrl": "./Blastoise.png",
  //     "type": "Water"
  //   },
  //   {
  //     "code": "424", "name": "Scizor", "longDescription": "Scizor has a body with the hardness of steel. It is not easily fazed by ordinary sorts of attacks. This Pokémon flaps its wings to regulate its body temperature.", "imageUrl": "./Scizor.png",
  //     "type": "Bug/Steel"
  //   },
  //   {
  //     "code": "F19", "name": "Luxray", "longDescription": "When its eyes gleam gold, it can spot hiding prey - even those taking shelter behind a wall.", "imageUrl": "./Luxray.png",
  //     "type": "Electric"
  //   },
  //   {
  //     "code": "F41", "name": "Torterra", "longDescription": "Ancient people imagined that beneath the ground, a gigantic Torterra dwelled.", "imageUrl": "./Torterra.png",
  //     "type": "Grass/Ground"
  //   },
  //   {
  //     "code": "F14", "name": "Snorlax", "longDescription": "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.", "imageUrl": "./Snorlax.png",
  //     "type": "Normal"
  //   },
  //   {
  //     "code": "F16", "name": "Infernape", "longDescription": "Its crown of fire is indicative of its fiery nature. It is beaten by none in terms of quickness.", "imageUrl": "./Infernape.png",
  //     "type": "Fire/Fighting"
  //   },
  //   {
  //     "code": "F31", "name": "Tyranitar", "longDescription": "Tyranitar is so overwhelmingly powerful, it can bring down a whole mountain to make its nest. This Pokémon wanders about in mountains seeking new opponents to fight.", "imageUrl": "./Tyranitar.png",
  //     "type": "Tyranitar"
  //   },
  //   {
  //     "code": "F1", "name": "Ninetales", "longDescription": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.", "imageUrl": "./Ninetales.png",
  //     "type": "Fire"
  //   },
  //   {
  //     "code": "F13", "name": "Squirtle", "longDescription": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.", "imageUrl": "./Squirtle.png",
  //     "type": "Water"
  //   }
  // ]

  return (
    <div className="App">
      <Notifications />
      <div
        className={serviceWorkerRegistration.isOnline() === 'true' ? 'online' : 'offline'}
      >
        <div className='statusHeader'>
          <img src={serviceWorkerRegistration.isOnline() === 'true' ? './Online.png' : './Offline.png'} alt="appStatus" />
          Your app status {serviceWorkerRegistration.isOnline().toString()}
        </div>
      </div>
      <div className="App-body">
        {BookingComponent()}
      </div >
    </div >
  );
}


export default App;
