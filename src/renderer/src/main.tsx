import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider, LocaleProvider } from '@douyinfe/semi-ui'
import zh_TW from '@douyinfe/semi-ui/lib/es/locale/source/zh_TW'
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US'
import './assets/style/index.scss'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LocaleProvider locale={en_US}>
      <App />
    </LocaleProvider>
  </React.StrictMode>
)
