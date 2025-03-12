import { GlobalStyle } from './style/globalStyle';
import { Header } from './components/header';
import { ThemeProvider } from './context/themeContext';
import { Nav } from './components/nav';
import { ToggleThemeButton } from './components/toggleThemeButton.jsx';
import { ProfilePicture } from './components/profilePicture/index.jsx';
import { AppRoutes } from './pages/routes.jsx';

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle />
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;