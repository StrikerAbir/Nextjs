import '../styles/globals.css'
import { ThemeProvider } from 'styled-component'
const theme = {
  colors: {
    primary:'#25507D',
  }
}
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
