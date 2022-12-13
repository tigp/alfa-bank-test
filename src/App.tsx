import { useState } from 'react';
import { useAsync } from 'react-async-hook';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Gif, Carousel } from '@giphy/react-components';
import { IGif } from '@giphy/js-types';
import { useDispatch } from 'react-redux';

import './App.css';
import { setGifs } from './redux/gifsSlice';

const giphyFetch = new GiphyFetch("RsyDbYcUXdcY4tRffnY7w1wMR5bRmkaY"); // fix global and hide secret

const OneGif = (): JSX.Element | null => {
  const [gif, setGif] = useState<IGif | null>(null);
  const [gifStore, setGifStore] = useState<any>(null);
  const dispatch = useDispatch();

  useAsync(async () => {
    const { data } = await giphyFetch.gif("71e2uFlpO2RpC02qRX"); // gif id 
    setGif(data);
  }, []);

  const test = async () => {
    const fetchGifs = (offset: number) => giphyFetch.search('dogs', { offset, limit: 5 });
    const { data } = await fetchGifs(5);
    setGifStore(data);
    // console.log(gifStore);
    dispatch(setGifs());
  };
  test();
  return (gif && <Gif gif={gif} width={400} />);
};

const CarouselDemo = (): JSX.Element => {
  const fetchGifs = (offset: number) => giphyFetch.search("dogs", { offset, limit: 10 });
  return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />;
};

const App = (): JSX.Element => {
  return (
    <>
      <OneGif />
      <CarouselDemo />
    </>
  );
}

export default App;
