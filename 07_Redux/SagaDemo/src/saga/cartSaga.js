import { put, takeEvery } from 'redux-saga/effects';

function* addToCartSaga(action) {
  try {
    yield put({
      type: 'ADD_TO_CART_SUCCESS',
      payload: action.payload,
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* cartSaga() {
  yield takeEvery('ADD_TO_CART_REQUEST', addToCartSaga);
}