import appFirebase from '../../firebase/config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { error_logIn, logIn_user } from '../slice/logIn_slice';
const auth = getAuth(appFirebase);


export const LogIn = ({ email, password }) =>
{
  return async (dispatch) =>
  {

    let response;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>
      {
        response = userCredential.user
        dispatch(logIn_user(response.accessToken
        ))
      })

      .catch((error) =>
      {
        dispatch(error_logIn(error))
      })
  }
}