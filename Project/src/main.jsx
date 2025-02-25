import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider as ChakraUIProvider } from './src/components/Chakra/provider'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <ChakraUIProvider>
      <App />
    </ChakraUIProvider>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
