'use client';

import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
function FactCard({ fact }) {
  return (
    <Card>
      <Card.Body>{fact}</Card.Body>
    </Card>
  );
}

export default FactCard;
