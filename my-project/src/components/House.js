
import React, { useEffect, useState } from 'react';
import './style.css';
import HouseList from './HouseList';
import { Container, Form, Button } from 'react-bootstrap';

const MOCK_API = 'https://650a0373f6553137159c5b85.mockapi.io/GET';

function House() {
  //State to hold the list of houses
  const [houses, setHouses] = useState([]);
  // State to hold the updated data for houses being edited
  const [updatedHouseData, setUpdatedHouseData] = useState({});

  // Fetches the list of houses from the mock API
  function getHouses() {
    fetch(MOCK_API)
      .then((data) => data.json())
      .then((data) => setHouses(data));
  }
  
   // Runs the getHouses function when the component mounts
  useEffect(() => {
    getHouses();
  }, []);
  
  // Deletes a house based on its id
  function deleteHouse(id) {
    fetch(`${MOCK_API}/${id}`, {
      method: 'DELETE'
    }).then(() => getHouses());
  }
  
  // Updates a house with new information
  function updateHouse(e, houseObject) {
    e.preventDefault();

    const updatedHouseObject = {
      ...houseObject,
      house: updatedHouseData[houseObject.id]?.house || houseObject.house,
      county: updatedHouseData[houseObject.id]?.county || houseObject.county,
      zipcode: updatedHouseData[houseObject.id]?.zipcode || houseObject.zipcode
    };

    fetch(`${MOCK_API}/${houseObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedHouseObject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        getHouses();
        setUpdatedHouseData(prevData => ({ ...prevData, [houseObject.id]: {} }));
      })
      .catch((error) => console.error('Error updating house:', error));
  }
   
  // Posts a new house to the mock API
  function postNewHouse(e) {
    e.preventDefault();

    fetch(MOCK_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        house: newHouse,
        county: newCounty,
        zipcode: newZipcode
      })
    })
      .then(() => {
        getHouses();
        setNewHouse('');
        setNewCounty('');
        setNewZipcode('');
      })
      .catch((error) => console.error('Error posting new house:', error));
  }
  
  // State to manage the new house information
  const [newHouse, setNewHouse] = useState('');
  const [newCounty, setNewCounty] = useState('');
  const [newZipcode, setNewZipcode] = useState('');
  
  // returns JSX to render the House component
  return (
    <Container>
      <HouseList />

      <div className='house-content'>
        <Form className='mb-4'>
          <h3>Post New House</h3>
          <Form.Group>
            <Form.Label>House</Form.Label>
            <Form.Control
              value={newHouse}
              onChange={(e) => setNewHouse(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>County</Form.Label>
            <Form.Control
              value={newCounty}
              onChange={(e) => setNewCounty(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              value={newZipcode}
              onChange={(e) => setNewZipcode(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' onClick={(e) => postNewHouse(e)}>
            Submit
          </Button>
        </Form>
      </div>

      <div className='house-container'>
        {houses.map((house, index) => (
          <div className='house' key={index}>
            <div>
              House: {house.house} <br />
              County: {house.county} <br />
              Zipcode: {house.zipcode} <br />
              <Button variant='danger' onClick={() => deleteHouse(house.id)}>
                Delete
              </Button>
            </div>
            <Form className='update-form'>
              <h4>Update House</h4>
              <Form.Group>
                <Form.Label>House</Form.Label>
                <Form.Control
                  value={updatedHouseData[house.id]?.house || ''}
                  onChange={(e) => setUpdatedHouseData(prevData => ({
                    ...prevData,
                    [house.id]: { ...prevData[house.id], house: e.target.value }
                  }))}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>County</Form.Label>
                <Form.Control
                  value={updatedHouseData[house.id]?.county || ''}
                  onChange={(e) => setUpdatedHouseData(prevData => ({
                    ...prevData,
                    [house.id]: { ...prevData[house.id], county: e.target.value }
                  }))}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  value={updatedHouseData[house.id]?.zipcode || ''}
                  onChange={(e) => setUpdatedHouseData(prevData => ({
                    ...prevData,
                    [house.id]: { ...prevData[house.id], zipcode: e.target.value }
                  }))}
                />
              </Form.Group>
              <Button
                variant='warning'
                onClick={(e) => updateHouse(e, house)}
              >
                Update
              </Button>
            </Form>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default House;
