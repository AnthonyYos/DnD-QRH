import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import ACTIONS from './ACTIONS';
import enemyReducer from './enemyReducer';

const initialState = {
  enemies: [],
  error: null,
};

export const EnemyContext = createContext(initialState);

export const EnemyProvider = props => {
  const [state, dispatch] = useReducer(enemyReducer, initialState);

  async function getEnemies() {
    try {
      const res = await axios.get('/api/v1/enemies');
      // res.data is the ENTIRE json object
      // res.data.data is accessing the data object of the json object
      dispatch({ type: ACTIONS.GET, payload: res.data.data });
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR, payload: err.data.error });
    }
  }

  async function getEnemy(id) {
    try {
      const res = await axios.get(`/api/v1/enemies/${id}`);
      dispatch({ type: ACTIONS.GET, payload: res.data.data });
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR, payload: err.data.error });
    }
  }

  async function addEnemy(enemy) {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/v1/enemies', enemy, config);
      dispatch({ type: ACTIONS.ADD, payload: res.data.data });
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR, payload: err.data.error });
    }
  }

  async function deleteEnemy(id) {
    try {
      await axios.delete(`/api/v1/enemies/${id}`);

      dispatch({ type: ACTIONS.DELETE, payload: id });
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR, payload: err.data.error });
    }
  }

  return (
    <EnemyContext.Provider
      value={{
        enemies: state.enemies,
        getEnemies,
        addEnemy,
        getEnemy,
        deleteEnemy,
        error: state.error,
      }}>
      {props.children}
    </EnemyContext.Provider>
  );
};
