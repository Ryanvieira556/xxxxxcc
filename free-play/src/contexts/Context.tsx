import { createContext } from "react";

type ContextType = {
    title: string,
    id: number
}
type ChildrenType = {
    children: React.ReactNode;
  }

const initialState = {
    title: '',
    id: 89
}

export const Context = createContext<ContextType>(initialState)

export const ContextProvider: React.FC<ChildrenType> = ({children}) => {
    return(
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}

