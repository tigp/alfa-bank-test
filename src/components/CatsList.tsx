import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHeart, AiOutlineMessage, AiOutlineDelete } from 'react-icons/ai';

import { catsSelector, setLikeToCat, removeCat } from '../redux/catsSlice';

function CatsList() {
  const dispatch = useDispatch();
  const { catsList } = useSelector(catsSelector);
  // console.log(catsList);

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
              <Button onClick={() => console.log('send the message')} variant="outline-secondary">
                <AiOutlineMessage />
              </Button>
              {' '}
              <Button onClick={() => dispatch(removeCat(catId))} variant="outline-danger">
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
}

export default CatsList;
