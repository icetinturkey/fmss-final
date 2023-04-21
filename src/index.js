import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './resources/Starjout.ttf';
import './resources/Exo2-Thin.ttf';
import './resources/Exo2-Medium.ttf';
import './resources/Exo2-ExtraBold.ttf';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter} from "react-router-dom";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter><App /></BrowserRouter>
    </QueryClientProvider>
);