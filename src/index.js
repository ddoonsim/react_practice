import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // pageTitle 설정
import ErrorPage from './pages/commons/ErrorPage'; // 에러 발생 시 노출되는 컴포넌트
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './modules/user';
import './i18n'; // 다국어 설정

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ErrorPage>
            <App />
          </ErrorPage>
        </BrowserRouter>
      </HelmetProvider>
    </UserProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
