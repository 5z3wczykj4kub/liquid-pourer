import { useState } from 'react';

import {
  faBeer,
  faCoffee,
  faWineGlassAlt,
  faTint,
} from '@fortawesome/free-solid-svg-icons';

import Glass from './components/Glass/Glass';
import Toggler from './components/Toggler/Toggler';
import Sidebar from './components/Sidebar/Sidebar';
import DrinkList from './components/Sidebar/DrinkList/DrinkList';

const DRINKS = [
  {
    drinkType: 'beer',
    liquidColor: '#f28e1c',
    hasMugEar: true,
    icon: faBeer,
    glassVolume: 500,
    calories: 40,
  },
  {
    drinkType: 'coffee',
    liquidColor: '#996633',
    hasMugEar: true,
    icon: faCoffee,
    glassVolume: 150,
    calories: 2,
  },
  {
    drinkType: 'wine',
    liquidColor: '#722f37',
    hasMugEar: false,
    icon: faWineGlassAlt,
    glassVolume: 200,
    calories: 80,
  },
  {
    drinkType: 'water',
    liquidColor: '#83d7ee',
    hasMugEar: false,
    icon: faTint,
    glassVolume: 250,
    calories: 0,
  },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState(DRINKS[0]);

  return (
    <>
      <Toggler
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isTouched={isTouched}
        setIsTouched={setIsTouched}
      />
      <Sidebar isSidebarOpen={isSidebarOpen}>
        <DrinkList
          drinks={DRINKS}
          setSelectedDrink={setSelectedDrink}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </Sidebar>
      <Glass selectedDrink={selectedDrink} />
    </>
  );
}

export default App;
