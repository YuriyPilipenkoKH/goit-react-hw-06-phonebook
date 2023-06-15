import Button from 'components/Button/Button';
import { StyledWrap } from 'components/Navigation/Navigation.styled';
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
        <StyledWrap>
          <p>Hello, {user.name}</p>
          <Button onClick={() => dispatch(logOut())}>Logout</Button>
        </StyledWrap>
      )}
    </>
  );
}