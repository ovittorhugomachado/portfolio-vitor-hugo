import { GlobalStyle } from './style/globalStyle';
import { Header } from './components/header';
import { ThemeProvider } from './context/themeContext';
import { Nav } from './components/nav';
import { AppRoutes } from './pages/routes.jsx';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <Header />
            <AppRoutes />
            <Nav deviceType={'mobile'} />
        </ThemeProvider>
    );
}

export default App;