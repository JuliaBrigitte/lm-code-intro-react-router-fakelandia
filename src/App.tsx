import React from 'react';
import {ErrorBoundary} from "react-error-boundary"
import AppRoutes from './Route'


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
