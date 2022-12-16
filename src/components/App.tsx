import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import LoadingBar from 'react-top-loading-bar';

import { getCats } from '../redux/catsSlice';
import CatsList from './CatsList';
import Filter from './Filter';
import RemoveModal from './modal/RemoveModal';

function App() {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
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
