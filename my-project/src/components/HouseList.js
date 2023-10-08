
import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css'; 


//HouseList component renders a list of houses using Bootstrap cards. Each card represents a specific type of house 
//and displays relevant information, including an image, house name, and description. This component allows for a visually
// appealing display of house information.
function HouseList() {
  // The houseData array contains objects with information about different types of houses.
  const houseData = [
    {
      imageSrc: 'https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-modern-house-plans-1.webp',
      houseName: 'Modern House',
      description: 'While each modern floor plan brings something unique to the table, they all emphasize clean lines, geometric shapes, open floor plans, and an aesthetically pleasing design flow in both interior and exterior spaces. Large windows and open air interiors are hallmarks of modern house plans, and they make for sophisticated and refined living spaces.'
    },
    {
      imageSrc: 'https://assets.themortgagereports.com/wp-content/uploads/2019/01/Contemporary.jpg',
      houseName: 'Mediterranean',
      description: 'Mediterranean homes can make you feel like you are on vacation in Italy, France, or Spain. Homeowners in nice climates like California and Florida love them for the hacienda-style layouts, which usually include a central courtyard; however, they are popping up in suburbs everywhere..'
    },
    {
      imageSrc: 'https://assets.themortgagereports.com/wp-content/uploads/2019/01/Mediterranean.jpg',
      houseName: 'Ranch house',
      description: 'Ranch homes were originally modeled after rural Western ranches. Their one-story layout with an attached garage is probably the most common design in the United States. There are many reasons why this style home maintains its appeal.'
    },
    {
      imageSrc: 'https://assets.themortgagereports.com/wp-content/uploads/2019/01/Ranch.jpg',
      houseName: 'Townhouse',
      description: 'Obviously, if you can afford to own a historic townhouse in an amazing neighborhood in the heart of San Francisco, then the benefits are enormous. However, for the vast majority of us, that is not an option. The townhome, however, is still one of the top designs for growing cities in 2019.'
    },
  ];

   //The component uses map to iterate over houseData, creating a card for each house.
   // Renders a list of houses in cards using Bootstrap.
  return (
    <div className="house-list-container d-flex">
      {houseData.map((house, index) => (
        <Card key={index} className="custom-card"> 
          <Card.Img variant="top" src={house.imageSrc} />
          <Card.Body>
            <Card.Title>{house.houseName}</Card.Title>
            <Card.Text>{house.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default HouseList;
