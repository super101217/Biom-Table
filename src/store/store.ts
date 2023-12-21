import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { homeAction, homeReducer } from './slices';
import { appSaga } from './sagas';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  home: homeReducer,
});
// create store
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(appSaga);

// root state
export type RootState = ReturnType<typeof store.getState>;

// export app dispatch
export type AppDispatch = typeof store.dispatch;

// export app actions
export const AppActions = {
  home: homeAction,
};
