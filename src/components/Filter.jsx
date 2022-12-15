import React from 'react';
import { Button } from 'react-bootstrap';
import { GiCat } from 'react-icons/gi';
import { BsCheckAll } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';

function Filter() {
  return (
    <>
      <h1 className="text-center">
        <GiCat />
        Filters
      </h1>
      <div className="filter-buttons d-grid gap-2">
        <Button size="lg" variant="primary">
          <BsCheckAll />
          {' '}
          All cats
        </Button>
        <Button size="lg" variant="secondary" className="favorite-button-margin-bottom">
          <MdFavorite />
          {' '}
          Favorite
        </Button>
      </div>
    </>
  );
}

export default Filter;
