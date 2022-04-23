import React from 'react';
import MainLayout from './MainLayout'
import {ErrorBoundary} from "react-error-boundary"
import AppRoutes from './Route'
import {BrowserRouter} from 'react-router-dom'

function SomethingWentWrong() {
    return (
        <div>
            <p>Something went wrong</p>
        </div>
    )
}

function App() {
  return (

    <div className="App">
        <ErrorBoundary FallbackComponent={SomethingWentWrong}>
            <AppRoutes/>
        </ErrorBoundary>

    </div>
  );
}

export default App;
