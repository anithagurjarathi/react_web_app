import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Counter = () => {
  const [count, setCount] = useState(0);
  const levelColor = useSpring({
    backgroundColor: `rgba(650, 568, 0, ${count / 100})`,
  });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  return (
    <animated.div style={{ ...levelColor, height: '100vh' }}>
      <Box textAlign="center" p={4}>
        <h1>Counter: {count}</h1>
        <Button onClick={increment} variant="contained" color="primary">Increment</Button>
        <Button onClick={reset} variant="contained">Reset</Button>
        <Button onClick={decrement} variant="contained" color="secondary">Decrement</Button>
        
      </Box>
    </animated.div>
  );
};

export default Counter;