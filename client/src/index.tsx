import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store/store';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <Provider store={store}>
      <PersistGate persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>
);
