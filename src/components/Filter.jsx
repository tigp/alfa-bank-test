import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { SiDatadog } from 'react-icons/si';
import { BsCheckAll } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';

import { changeFilter } from '../redux/dogsSlice';

function Filter() {
  const dispatch = useDispatch();

  const handleAll = () => dispatch(changeFilter('all'));
  const handleFavorites = () => dispatch(changeFilter('favorites'));

  return (
    <>
      <h1 className="text-center">
        <SiDatadog />
        Filters
      </h1>
      <div className="filter-buttons d-grid gap-2">
        <Button onClick={handleAll} size="lg" variant="primary">
          <BsCheckAll />
          {' '}
          All dogs
        </Button>
        <Button onClick={handleFavorites} size="lg" variant="secondary" className="favorite-button-margin-bottom">
          <MdFavorite />
          {' '}
          Favorites
        </Button>
      </div>
    </>
  );
}

export default Filter;
