import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHeart } from 'react-icons/ai';

import { catsSelector, setLikeToCat } from '../redux/catsSlice';

function CatsList() {
  const dispatch = useDispatch();
  const { catsList } = useSelector(catsSelector);
  console.log(catsList);

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
          <Card className="card-height">
            <Card.Img variant="bottom" src={image.url} alt="cat" width="150" height="400" />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button onClick={() => dispatch(setLikeToCat(catId))} variant={!isLiked ? 'outline-danger' : 'danger'}>
                <AiOutlineHeart />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CatsList;
