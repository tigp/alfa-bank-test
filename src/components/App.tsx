import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { setCats, catsSelector } from '../redux/catsSlice';

function Cats() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.thecatapi.com/v1/breeds');
      data.forEach((
        {
          image,
          description,
          name,
        }: { image: object; description: string; name: string },
      ) => {
        const isLiked: boolean = false;
        dispatch(setCats({
          image,
          description,
          name,
          isLiked,
        }));
      });
    };

    getData();
  }, []);

  const c = useSelector(catsSelector);
  console.log(c);
  return (<img src="https://cdn2.thecatapi.com/images/MTYzMzcxNg.gif" alt="cat" />);
}

function App() {
  return (
    <>
      <h1>CATS</h1>
      <Cats />
    </>
  );
}

export default App;
