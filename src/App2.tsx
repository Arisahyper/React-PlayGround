import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { isOdd } from './styles/Logic';

const App2 = () => {
  const [num, setNum] = useState<number>(0);
  return (
    <div className="flex flex-col aligin">
      <h1 className="bg-red-600">{isOdd(num) ? <></> : num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default App2;

{
  /* ChakraUI↓
      <Box color={'red.900'} m={'auto'} pt={'-20'} textAlign={'center'}>
        <h1>Hello</h1>
      </Box> */
}
