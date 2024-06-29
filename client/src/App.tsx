import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './routes';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';
// import Spinner from './components/common/Spinner';

// sudo nginx
// sudo nginx -s reload
// sudo tail -f /var/log/nginx/access.log

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <Router>
            <Suspense
              fallback={
                <div className='min-h-screen w-full bg-zinc-950 flex justify-center pt-36'>
                  {/* <Spinner fill='fill-lime-500' wAndH='w-10 h-10' /> */}
                </div>
              }
            >
              <MainRoutes />
            </Suspense>
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
