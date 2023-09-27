import { CounterSchema } from "@/entities/Counter";
import { CounterSchema2 } from "@/entities/Counter2";
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { AxiosInstance } from "axios";

export interface StateSchema {
    counter?: CounterSchema,
    counter2: CounterSchema2,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T>{
    rejectValue: T;
    extra: ThunkExtraArg
}

