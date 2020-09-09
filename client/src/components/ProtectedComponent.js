import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const ProtectedComponent = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [ready, setReady] = useState(false);

  const getUser = async () => {
    try {
      const user = await axios.get('/api/me');
      if (user.data.status) {
        setAuthenticated(true);
        setReady(true);
      }
    } catch (e) {
      setReady(true);
      if (e.response.data.status === false) {
        setAuthenticated(false);
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return ready ? (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/admin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  ) : <p> Loading... </p>;
};

export default ProtectedComponent;
