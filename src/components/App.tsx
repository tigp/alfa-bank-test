/* eslint-disable camelcase */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import LoadingBar from 'react-top-loading-bar';

import { getDogs } from '../redux/dogsSlice';
import CatsList from './DogsList';
import Filter from './Filter';
import RemoveModal from './modal/RemoveModal';

function App() {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.thedogapi.com/v1/breeds');
        data.slice(0, 30).forEach((
          {
            image,
            temperament,
            name,
            height,
            life_span,
          }: { image: any; temperament: string; name: string, height: any, life_span: string},
        ) => {
          const isLiked: boolean = false;
          const dogId: string = image.id;
          dispatch(getDogs({
            image,
            dogId,
            temperament,
            name,
            isLiked,
            height,
            lifeSpan: life_span,
          }));
        });
        setProgress(100);
      } catch (err) {
        setProgress(0);
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <Container>
      <RemoveModal />
      <Filter />
      <LoadingBar
        height={5}
        color="#be1737"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <CatsList />
    </Container>
  );
}

export default App;
