import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Container, Spinner } from 'react-bootstrap';

import { getCats } from '../redux/catsSlice';
import CatsList from './CatsList';
import Filter from './Filter';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.thecatapi.com/v1/breeds');
      data.slice(0, 30).forEach((
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
      <Filter />
      <CatsList />
    </Container>
  );
}

export default App;
