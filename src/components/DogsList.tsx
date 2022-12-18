import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHeart, AiOutlineDelete } from 'react-icons/ai';

import { dogsSelector, setLikeToDog } from '../redux/dogsSlice';
import { openModal } from '../redux/modalSlice';

const cardRender = () => {
  const { dogsList, filterState } = useSelector(dogsSelector);
  const dispatch = useDispatch();
  const handleOpen = (id: string) => dispatch(openModal(id));
  console.log(dogsList);

  if (filterState === 'favorites') {
    return (
      <Row xs={1} md={2} className="g-4">
        {dogsList.length > 0
        && dogsList.map((
          {
            image,
            dogId,
            temperament,
            name,
            isLiked,
            height: { metric },
            lifeSpan,
          },
        ): null | any => (
          isLiked
            ? (
              <Col key={dogId}>
                <Card className="card-height card-color">
                  <Card.Img variant="bottom" src={image.url} alt={`cute ${name} cat`} width="150" height="400" />
                  <Card.Body>
                    <Button onClick={() => dispatch(setLikeToDog(dogId))} variant={!isLiked ? 'outline-danger' : 'danger'}>
                      <AiOutlineHeart />
                    </Button>
                    {' '}
                    <Button onClick={() => handleOpen(dogId)} variant="outline-secondary">
                      <AiOutlineDelete />
                    </Button>
                    <Card.Title className="card-title-margin-top">{name}</Card.Title>
                    <Card.Text>{`Temperament: ${temperament}`}</Card.Text>
                    <Card.Text>{`${metric} cm at the withers`}</Card.Text>
                    <Card.Text>{`Life span: ${lifeSpan}`}</Card.Text>
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
      {dogsList.length > 0
      && dogsList.map((
        {
          image,
          dogId,
          temperament,
          name,
          isLiked,
          height: { metric },
          lifeSpan,
        },
      ): null | any => (
        <Col key={dogId}>
          <Card className="card-height card-color">
            <Card.Img variant="bottom" src={image.url} alt={`cute ${name} cat`} width="150" height="400" />
            <Card.Body>
              <Button onClick={() => dispatch(setLikeToDog(dogId))} variant={!isLiked ? 'outline-danger' : 'danger'}>
                <AiOutlineHeart />
              </Button>
              {' '}
              <Button onClick={() => handleOpen(dogId)} variant="outline-secondary">
                <AiOutlineDelete />
              </Button>
              <Card.Title className="card-title-margin-top">{name}</Card.Title>
              <Card.Text>{`Temperament: ${temperament}`}</Card.Text>
              <Card.Text>{`${metric} cm at the withers`}</Card.Text>
              <Card.Text>{`Life span: ${lifeSpan}`}</Card.Text>
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
