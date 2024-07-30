import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import recipeTheme from './views/theme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={recipeTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
