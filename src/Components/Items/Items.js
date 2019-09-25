import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Item from './Item/Item';
import './Items.css';

const Items = (props) => {

  const [items, setItems] = useState('');

  const fetchItems = () => {
    fetch('https://littlegrocery-server.herokuapp.com/items/allitems', {
      method: 'GET',
      headers: new Headers ({
          'Content-Type': 'application/json',
          'Authorization': props.token
      })
    }) .then( (res) => res.json())
      .then((logData) => {
          setItems(logData)
      })
  };

  useEffect(() => {
    fetchItems();
  }, [])

  return(
    <Container>
      <Row>
        <Col md="2">
          <p></p>
        </Col>
        <Col md="9">
          <content>{fetchItems()}</content>
        </Col>
        <Col md="2">
          <p></p>
        </Col>
      </Row>
    </Container>
  )
};

export default Items