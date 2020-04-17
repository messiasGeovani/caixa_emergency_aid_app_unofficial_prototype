// contexts config
import { createContext } from 'react'

const MainNavigatorContext = createContext()
const MainNavigatorProvider = MainNavigatorContext.Provider

export { 
    MainNavigatorContext,
    MainNavigatorProvider
}