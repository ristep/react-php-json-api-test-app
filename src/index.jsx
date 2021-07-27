import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInactive: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
  },
});

// import "styles/Spacelab/main.css";
ReactDOM.render(
  <React.StrictMode>
    {/* <link rel="stylesheet" type="text/css" href={process.env.PUBLIC_URL + "/styles/Spacelab/main.css"}></link> */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
