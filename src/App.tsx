import { useState } from 'react';
import './App.css';
import { Flex, Text } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './auth';


function App() {
  return (
    <Flex height={"100dvh"} width={"100dvw"}>
      <AuthPage/>
      {/* <Routes>
        <Route path='/' element={<AuthPage/>} />
      </Routes> */}
    </Flex>
  )
}

export default App;
