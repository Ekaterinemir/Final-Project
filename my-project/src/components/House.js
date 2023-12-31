
import React, { useEffect, useState } from 'react';
import './style.css';
import HouseList from './HouseList';
import { Container, Form, Button } from 'react-bootstrap';

const MOCK_API = 'https://650a0373f6553137159c5b85.mockapi.io/GET';

//House component defines a React functional component that allows users to interact with houses, view, post, update,
// and delete them. It fetches house data from a mock API, displays the information, and provides options to perform 
//various actions on the houses.
function House() {
  // State to hold the list of houses
  const [houses, setHouses] = useState([]);
  // State to hold the updated data for houses.
  const [updatedHouseData, setUpdatedHouseData] = useState({});
  // State to manage the new house information
  const [newHouse, setNewHouse] = useState('');
  const [newCounty, setNewCounty] = useState('');
  const [newZipcode, setNewZipcode] = useState('');
  // State to manage the selected house for update
  const [selectedHouse, setSelectedHouse] = useState(null);

  // Function GetHouses fetches the list of houses from the mock API
  function getHouses() {
    fetch(MOCK_API)
      .then((data) => data.json())
      .then((data) => setHouses(data));
  }

  // useEffect runs the getHouses function when the component mounts.
  useEffect(() => {
    getHouses();
  }, []);

  // function deleteHouse deletes a house based on its id
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
        setUpdatedHouseData((prevData) => ({ ...prevData, [houseObject.id]: {} }));
        setSelectedHouse(null);
      })
      .catch((error) => console.error('Error updating house:', error));
  }

  // Posts a new house to the mock API.
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

  // Function to handle selecting a house for update.
  const handleSelectHouse = (house) => {
    setSelectedHouse(selectedHouse === house ? null : house);
  };

  //The function returns JSX representing the structure and content of the house section.
//It includes a list of houses displayed with their details, delete and update options, and a form to post new houses.
  return (
    <Container>
      <HouseList />

      <div className='house-content'>
        <Form className='mb-4'> 
          <h3>Post New House</h3>
          <Form.Group>
            <Form.Label>House</Form.Label>
            <Form.Control value={newHouse} onChange={(e) => setNewHouse(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>County</Form.Label>
            <Form.Control value={newCounty} onChange={(e) => setNewCounty(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control value={newZipcode} onChange={(e) => setNewZipcode(e.target.value)} />
          </Form.Group>
          <Button className ='submit' variant='primary' onClick={(e) => postNewHouse(e)}>
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
              
              <Button className='delete' variant='danger' onClick={() => deleteHouse(house.id)}>
                Delete
              </Button>
              <Button variant='info' onClick={() => handleSelectHouse(house)}>
                {selectedHouse === house ? 'Hide Update' : 'Update'}
              </Button>
             
            </div>
            {selectedHouse && selectedHouse.id === house.id && (
              <Form className='update-form'>
                <h4>Update House</h4>
                <Form.Group>
                  <Form.Label>House</Form.Label>
                  <Form.Control
                    value={updatedHouseData[house.id]?.house || ''}
                    onChange={(e) =>
                      setUpdatedHouseData((prevData) => ({
                        ...prevData,
                        [house.id]: { ...prevData[house.id], house: e.target.value }
                      }))
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>County</Form.Label>
                  <Form.Control
                    value={updatedHouseData[house.id]?.county || ''}
                    onChange={(e) =>
                      setUpdatedHouseData((prevData) => ({
                        ...prevData,
                        [house.id]: { ...prevData[house.id], county: e.target.value }
                      }))
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    value={updatedHouseData[house.id]?.zipcode || ''}
                    onChange={(e) =>
                      setUpdatedHouseData((prevData) => ({
                        ...prevData,
                        [house.id]: { ...prevData[house.id], zipcode: e.target.value }
                      }))
                    }
                  />
                </Form.Group>
                <Button className='update' variant='warning' onClick={(e) => updateHouse(e, house)}>
                  Update
                </Button>
              </Form>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default House;
