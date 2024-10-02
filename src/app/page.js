'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

// import { Button } from 'react-bootstrap';
// import { signOut } from '@/utils/auth'; // anything in the src dir, you can use the @ instead of relative paths
import { useAuth } from '@/utils/context/authContext';
import { useEffect, useState } from 'react';
import { postFact, updateFact } from '../api/facts';

function Home() {
  const [useLessFact, setUselesFact] = useState({});
  const { user } = useAuth();

  const fetchFact = async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const fact = await response.json();
    setUselesFact(fact);
  };

  const selectResponse = async (boolean) => {
    const val = boolean ? 'Yes' : 'No';
    const obj = {
      userId: user.uid,
      text: useLessFact.text,
    };

    const response = await postFact(obj, val);
    await updateFact(response.name, val);

    fetchFact();
    return obj;
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <>
      <h2>{useLessFact.text}</h2>
      <h4>Did you know this fact?</h4>
      <button className="btn btn-success" type="button" onClick={() => selectResponse(true)}>
        Yes
      </button>
      <button className="btn btn-danger" type="button" onClick={() => selectResponse(false)}>
        No
      </button>
    </>
  );
}

export default Home;
