import React from 'react';
import PropTypes from 'prop-types';
import FactCard from '../../../components/Card';
import { readFacts } from '../../../api/facts';

// eslint-disable-next-line react/prop-types
export default async function ResponsePage({ params, searchParams }) {
  const facts = await readFacts(params.userId, searchParams.value);

  return (
    <div>
      {searchParams.value}
      {Object.values(facts).map((fact) => (
        <FactCard key={fact.userId} fact={fact.text} />
      ))}
    </div>
  );
}

ResponsePage.propTypes = {
  params: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
};

export async function ResponseNoPage({ params, searchParams }) {
  const facts = await readFacts(params.userId, searchParams.value);

  return (
    <div>
      {searchParams.value}
      {Object.values(facts).map((fact) => (
        <FactCard key={fact.userId} fact={fact.text} />
      ))}
    </div>
  );
}

ResponseNoPage.propTypes = {
  params: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
};
