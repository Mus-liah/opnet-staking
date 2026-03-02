import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { WalletConnectProvider } from '@btc-vision/walletconnect'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletConnectProvider theme="dark">
      <App />
    </WalletConnectProvider>
  </React.StrictMode>
)
