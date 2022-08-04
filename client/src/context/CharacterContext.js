import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import ACTIONS from './ACTIONS';
import characterReducer from './characterReducer';

const initialState = {
  players: [],
  player: null,
  enemies: [],
  enemy: null,
  error: null,
};

export const CharacterContext = createContext(initialState);

export const CharacterProvider = props => {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const abortController = new AbortController();

  async function getCharacters(characterType) {
    try {
      const res = await axios.get(`/api/v1/${characterType}`, { signal: abortController.signal });
      dispatch({ type: ACTIONS.GET, payload: res.data.data });
    } catch (err) {
      console.error(err, "Can't retrieve characters of undefined resource.");
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

  async function addCharacter(character, characterType) {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    try {
      const res = await axios.post(`/api/v1/${characterType}`, character, config);
      return dispatch({ type: ACTIONS.ADD, payload: res.data.data });
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
    <CharacterContext.Provider
      value={{
        players: state.players,
        player: state.player,
        enemies: state.enemies,
        enemy: state.enemy,
        getCharacters,
        addCharacter,
        getEnemy,
        deleteEnemy,
        error: state.error,
      }}>
      {props.children}
    </CharacterContext.Provider>
  );
};
