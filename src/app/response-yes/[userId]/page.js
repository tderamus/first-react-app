import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default async function ResponseYesPage({ params }) {
  const response = await fetch(`https://firstreactapp-46b03-default-rtdb.firebaseio.com/responseYes.json?orderBy="userId"&equalTo"${params.userId}"`, { cache: 'no-store' });
  const facts = await response.json();

  return <div>{Object.values(facts).map((fact) => fact.text)}</div>;
}

ResponseYesPage.propTypes = {
  params: PropTypes.string.isRequired,
};
