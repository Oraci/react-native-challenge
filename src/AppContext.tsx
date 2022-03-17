import React, {
  createContext,
  useMemo,
  useReducer,
  ReactNode,
  Dispatch,
  Reducer,
} from 'react';
import { ProductCart } from './types/product';

type InitialStateProps = {
  cart: ProductCart[];
};

type AppProviderProps = {
  children: ReactNode;
};

type SetCart = {
  type: typeof SET_CART;
  payload: ProductCart;
};

type AppActionTypes = SetCart;

export const SET_CART = 'SET_CART';

const initialState: InitialStateProps = {
  cart: [],
};

const defDispatch: Dispatch<AppActionTypes> = () => initialState;

const AppContext = createContext({
  state: initialState,
  dispatch: defDispatch,
});

function reducer(state: InitialStateProps, action: AppActionTypes) {
  switch (action.type) {
    case SET_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    default: {
      return state;
    }
  }
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer<
    Reducer<InitialStateProps, AppActionTypes>
  >(reducer, initialState);
  const store = useMemo(() => ({ state, dispatch }), [state]);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
