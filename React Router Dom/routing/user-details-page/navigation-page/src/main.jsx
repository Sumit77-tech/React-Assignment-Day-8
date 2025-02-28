import { React } from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import './index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
);
