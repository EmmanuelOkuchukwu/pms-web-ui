import App from '../App';
import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import { alertOptionConfig } from './AlertOptionConfig'
import AlertTemplate from 'react-alert-template-basic'

// code based on https://www.npmjs.com/package/react-alert
export const Root = () => (
    <AlertProvider template={AlertTemplate} {...alertOptionConfig}>
      <App />
    </AlertProvider>

  )