import React from 'react'
import Card from 'react-bootstrap/Card';
import CharacterModal from './CharacterModal';

function CharacterCard({ character }) {
  return (
      <div className='flip-card'> 
      <Card style={{ width: '14rem' }} className="flip-card-inner">
        <div className="flip-card-front">
          <Card.Img variant="top" src={character.image} className='cardImg'/>
        </div>
      <div className="flip-card-back">
        <Card.Body>
        <Card.Text className='nameCard'>
         {character.name}
          </Card.Text>
          <CharacterModal character={character} />
      </Card.Body>
      </div>
    </Card>
    </div>
  )
}

export default CharacterCard


