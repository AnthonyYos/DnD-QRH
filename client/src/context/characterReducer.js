/* eslint-disable default-case */
import ACTIONS from './ACTIONS';

export default function enemyReducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET:
      return { ...state, enemies: action.payload };
    case ACTIONS.ADD:
      return { ...state, enemies: [...state.enemies, action.payload] };
    case ACTIONS.DELETE:
      return { ...state, enemies: state.enemies.filter(enemy => enemy._id !== action.payload) };
    default:
      return state;
  }
}
