import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function CarouselArrows({ goForward, goBackward }) {
    return (
      <ButtonGroup>
        <Button onClick={goBackward} className="bi bi-arrow-left-circle" />
        <Button onClick={goForward} className="bi bi-arrow-right-circle" />
      </ButtonGroup>
    );
  }
export default CarouselArrows;