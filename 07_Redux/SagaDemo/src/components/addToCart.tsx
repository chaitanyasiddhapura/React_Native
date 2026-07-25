import { useDispatch } from 'react-redux';

const dispatch = useDispatch();

const handleAdd = (item) => {
  dispatch({
    type: 'ADD_TO_CART_REQUEST',
    payload: item,
  });
};