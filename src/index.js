import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';

const containerRef = React.createRef();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LocomotiveScrollProvider options={{smooth: true,}} watch={[]} containerRef={containerRef}>
            <div data-scroll-container ref={containerRef}>
                <App />
            </div>
        </LocomotiveScrollProvider>
    </React.StrictMode>,
);

reportWebVitals();
