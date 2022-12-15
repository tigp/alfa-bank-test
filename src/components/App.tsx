import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Container } from 'react-bootstrap';

import { getCats } from '../redux/catsSlice';
import CatsList from './CatsList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.thecatapi.com/v1/breeds');
      data.slice(10, 30).forEach((
        {
          image,
          description,
          name,
        }: { image: any; description: string; name: string },
      ) => {
        const isLiked: boolean = false;
        const catId: string = image.id;
        dispatch(getCats({
          image,
          catId,
          description,
          name,
          isLiked,
        }));
      });
    };

    getData();
  }, []);

  return (
    <Container>
      <CatsList />
    </Container>
  );
}

export default App;
