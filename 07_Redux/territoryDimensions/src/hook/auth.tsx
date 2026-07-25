import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../features/auth/userAuthenticationReducer';

export default function useAuth() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  function updateUserData(data) {
    dispatch(updateUser(data));
  }

  return {
    user,
    updateUser: updateUserData,
  };
}