import { createContext } from 'react'
import { BeagleUIService } from './types'

const context = createContext<BeagleUIService | null>(null)
export const BeagleProvider = context.Provider
export default context
