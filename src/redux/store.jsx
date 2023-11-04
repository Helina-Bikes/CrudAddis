import rootreducer from "./rootreducer";
import musicsaga from "./musicSaga";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'

const sgaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:rootreducer,
    middleware:()=>[sgaMiddleware]
})
sgaMiddleware.run(musicsaga);

export default store