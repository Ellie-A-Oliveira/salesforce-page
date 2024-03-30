import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './styles/global.style.ts';
import './styles/fonts-index.ts';
import { clickTracker } from './scripts/click-tracker.ts';

document.addEventListener('click', clickTracker);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
);
