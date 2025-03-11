import { GlobalStyle } from './style/globalStyle';
import { Header } from './components/header';
import { ThemeProvider } from './context/themeContext';
import { Nav } from './components/nav';
import { ToggleThemeButton } from './components/toggleThemeButton.jsx';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <Header />
            <Nav deviceType={'mobile'}/> {/*SÓ RENDERIZA EM NO MÁXIMO 1020px */}
        </ThemeProvider>
    );
}

export default App;