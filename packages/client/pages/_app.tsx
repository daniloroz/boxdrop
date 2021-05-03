import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import store from "../../../packages/core/redux/store"
import { Provider } from "react-redux"
import theme from '../utils/theme';




function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store} >
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
