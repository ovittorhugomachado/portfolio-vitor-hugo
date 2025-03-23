import { GlobalStyle } from './style/globalStyle';
import { ThemeProvider } from './context/themeContext';
import { SectionProvider } from './context/sectionContext.jsx';
import { Header } from './components/header';
import { Nav } from './components/nav';
import { Main } from './components/main/index.jsx';

function App() {

    return (
        <SectionProvider>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                <Main />
                <Nav deviceType={'mobile'} />
            </ThemeProvider>
        </SectionProvider>
    );
}

export default App;