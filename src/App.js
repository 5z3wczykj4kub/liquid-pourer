import { useState } from 'react';

import Glass from './components/Glass/Glass';
import Toggler from './components/Toggler/Toggler';
import Sidebar from './components/Sidebar/Sidebar';

const DRINKS = [
  {
    drinkType: 'beer',
    liquidColor: '#f28e1c',
    hasMugEar: true,
  },
  {
    drinkType: 'coffee',
    liquidColor: '#996633',
    hasMugEar: true,
  },
  {
    drinkType: 'wine',
    liquidColor: '#722f37',
    hasMugEar: false,
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
        <ul>
          {DRINKS.map(({ drinkType }, index) => (
            <li
              key={drinkType}
              onClick={() => {
                setSelectedDrink(DRINKS[index]);
                setIsSidebarOpen(false);
              }}
            >
              {drinkType}
            </li>
          ))}
        </ul>
      </Sidebar>
      <Glass selectedDrink={selectedDrink} />
    </>
  );
}

export default App;
