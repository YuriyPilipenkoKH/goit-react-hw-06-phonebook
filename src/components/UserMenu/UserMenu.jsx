import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';



export function UserMenu() {
  const dispatch = useDispatch();
  const { isFetching } = useAuth();
  const { user, isLoggedIn } = useAuth();


  return (
    <>
      {isFetching && <p> Loading</p >}
      {isLoggedIn && (
        <div>
          <p>Hello, {user.name}</p>
          <button onClick={() => dispatch(logOut())}>Logout</button>
        </div>
      )}
    </>
  );
}