import { Button } from 'Components/GlobalStyle.styled';
import { useRef } from 'react';

export const Player = ({ source }) => {
  const playerRef = useRef();
  const play = _ => playerRef.current.play();
  const pause = _ => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>

      <Button onClick={play}>Play</Button>
      <Button onClick={pause}>Pause</Button>
    </div>
  );
};
