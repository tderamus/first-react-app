'use client';

import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types
function FactCard({ fact }) {
  return (
    <Card>
      <Card.Body>{fact}</Card.Body>
    </Card>
  );
}

FactCard.propTypes = {
  fact: PropTypes.string.isRequired,
};

export default FactCard;
