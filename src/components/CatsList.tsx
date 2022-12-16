import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHeart, AiOutlineDelete } from 'react-icons/ai';

import { catsSelector, setLikeToCat } from '../redux/catsSlice';
import { openModal } from '../redux/modalSlice';

const cardRender = () => {
  const { catsList, filterState } = useSelector(catsSelector);
  const dispatch = useDispatch();
  const handleOpen = (id: string) => dispatch(openModal(id));

  if (filterState === 'favorites') {
    return (
      <Row xs={1} md={2} className="g-4">
        {catsList.length > 0
        && catsList.map((
          {
            image,
            catId,
            description,
            name,
            isLiked,
          },
        ): null | any => (
          isLiked
            ? (
              <Col key={catId}>
                <Card className="card-height card-color">
                  <Card.Img variant="bottom" src={image.url} alt={`cute ${name} cat`} width="150" height="400" />
                  <Card.Body>
                    <Button onClick={() => dispatch(setLikeToCat(catId))} variant={!isLiked ? 'outline-danger' : 'danger'}>
                      <AiOutlineHeart />
                    </Button>
                    {' '}
                    <Button onClick={() => handleOpen(catId)} variant="outline-secondary">
                      <AiOutlineDelete />
                    </Button>
                    <Card.Title className="card-title-margin-top">{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
            : (null)
        ))}
      </Row>
    );
  }

  return (
    <Row xs={1} md={2} className="g-4">
      {catsList.length > 0
      && catsList.map((
        {
          image,
          catId,
          description,
          name,
          isLiked,
        },
      ): null | any => (
        <Col key={catId}>
          <Card className="card-height card-color">
            <Card.Img variant="bottom" src={image.url} alt={`cute ${name} cat`} width="150" height="400" />
            <Card.Body>
              <Button onClick={() => dispatch(setLikeToCat(catId))} variant={!isLiked ? 'outline-danger' : 'danger'}>
                <AiOutlineHeart />
              </Button>
              {' '}
              <Button onClick={() => handleOpen(catId)} variant="outline-secondary">
                <AiOutlineDelete />
              </Button>
              <Card.Title className="card-title-margin-top">{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

function CatsList() {
  return cardRender();
}

export default CatsList;
