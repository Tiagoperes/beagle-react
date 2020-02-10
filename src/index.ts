import createBeagleCoreUIService, { DefaultSchema } from 'beagle-core'
import BeagleRemoteView from './component'
import { BeagleProvider } from './context'
import { BeagleConfig, BeagleUIService } from './types'

type CreateBeagleUIService<Schema = DefaultSchema> = (config: BeagleConfig<Schema>) =>
  BeagleUIService<Schema>

const createBeagleUIService = createBeagleCoreUIService as CreateBeagleUIService

export {
  createBeagleUIService,
  BeagleRemoteView,
  BeagleProvider,
  BeagleConfig,
  BeagleUIService,
}
