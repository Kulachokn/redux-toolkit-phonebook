import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {filterReducer, contactsReducer} from "./reducer";
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware,
})

export default store;
