import 'antd/dist/antd.css'
import '../styles/global.scss'

import { Provider } from 'mobx-react'
import { useStore } from '../models/store'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
