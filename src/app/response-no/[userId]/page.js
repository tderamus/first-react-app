import React from 'react';
import PropTypes from 'prop-types';
import FactCard from '../../../components/Card';

export default async function ResponseNoPage({ params }) {
  const response = await fetch(`https://firstreactapp-46b03-default-rtdb.firebaseio.com/responseNo.json?orderBy="userId"&equalTo"${params.userId}"`, { cache: 'no-store' });
  const facts = await response.json();

  return (
    <div>
      {Object.values(facts).map((fact) => (
        <FactCard key={fact.firebaseKey} fact={fact.text} />
      ))}
    </div>
  );
}

ResponseNoPage.propTypes = {
  params: PropTypes.string.isRequired,
};
