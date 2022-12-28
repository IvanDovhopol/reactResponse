import { TestHooks } from 'Components/HooksTest/Hooks';
import { UserMenu } from 'Components/hooks/UserMenu';
import { Player } from 'Components/Player';
import { Counter } from 'Components/Counter';

export const App = () => {
  return (
    <>
      <TestHooks />
      <UserMenu />

      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />

      <Counter />
    </>
  );
};
