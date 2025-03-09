import { GlobalStyle } from './globalStyle';
import { Header } from './components/header';
import { ThemeProvider } from './context/themeContext';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <Header />
        </ThemeProvider>
    );
}

export default App;