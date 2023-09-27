import { createRoot } from 'react-dom/client';
import { App } from '@/app/ui/App';
import '@/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './app/providers/store';
import { ThemeProvider } from './app/providers/ThemeProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден');
}

const root = createRoot(container);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
);
