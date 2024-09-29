import PropTypes from 'prop-types';
import React from 'react';

export default async function ResponseNoPage({ params }) {
  const response = await fetch(`https://firstreactapp-46b03-default-rtdb.firebaseio.com/responseYes.json?orderBy="userId"&equalTo"${params.userId}"`, { cache: 'no-store' });
  const facts = await response.json();

  return <div>{Object.values(facts).map((fact) => fact.text)}</div>;
}

ResponseNoPage.propTypes = {
  params: PropTypes.string.isRequired,
};
