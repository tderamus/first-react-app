import React from 'react';
import PropTypes from 'prop-types';
import FactCard from '../../../components/Card';
import { readFacts } from '../../../api/facts';

// eslint-disable-next-line react/prop-types
async function ResponseYesPage({ params, searchParams }) {
  const facts = await readFacts(params.userId, searchParams.value);

  return (
    <div>
      {searchParams.value}
      {Object.values(facts).map((fact) => (
        <FactCard key={fact.firebaseKey} fact={fact.text} />
      ))}
    </div>
  );
}

ResponseYesPage.propTypes = {
  params: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
};

async function ResponseNoPage({ params, searchParams }) {
  const facts = await readFacts(params.userId, searchParams.value);

  return (
    <div>
      {searchParams.value}
      {Object.values(facts).map((fact) => (
        <FactCard key={fact.firebaseKey} fact={fact.text} />
      ))}
    </div>
  );
}

ResponseNoPage.propTypes = {
  params: PropTypes.string.isRequired,
  searchParams: PropTypes.string.isRequired,
};

// eslint-disable-next-line no-unused-expressions
export { ResponseNoPage, ResponseYesPage };
