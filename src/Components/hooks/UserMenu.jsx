import { Button } from 'Components/GlobalStyle.styled';
import { useUser } from './userContext';

export const UserMenu = () => {
  const { isLoggedIn, username, logOut, logIn } = useUser();

  return (
    <div>
      {isLoggedIn && <p>Добро пожаловать {username}!</p>}
      {isLoggedIn ? (
        <Button type="button" onClick={logOut}>
          log-out
        </Button>
      ) : (
        <Button type="button" onClick={logIn}>
          log-In
        </Button>
      )}
    </div>
  );
};
