import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Components';

function NotFound() {
  return (
    <div className="page-not-found">
      <Container>
        <h2>404</h2>
        <p>
          The page you&apos;re looking for is not found, Go back to
          {' '}
          <Link to="/">Home Page</Link>
        </p>
      </Container>
    </div>
  );
}

export default NotFound;
