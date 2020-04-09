import React, { useEffect} from 'react';
import { getListOfFruit } from '../myApi/myFruitApi';

export const MyFruits = () => {
  const [fruits, setFruits] = React.useState([]);
  useEffect(() => {
    getListOfFruit().then(setFruits);
  }, []);

  return (
    <>
      <h4>Fruits gallore</h4>
      {fruits.map((fruit, index) => (
        <li key={index} data-testid={fruit}>
          {fruit}
        </li>
      ))}
    </>
  );
};
