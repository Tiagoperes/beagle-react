import createBeagleCoreUIService, { DefaultSchema } from 'beagle-core'
import BeagleRemoteView from './component'
import { BeagleProvider } from './context'
import { BeagleConfig, BeagleUIService } from './types'

function createBeagleUIService<Schema = DefaultSchema>(config: BeagleConfig<Schema>) {
  return createBeagleCoreUIService(config)
}

export {
  createBeagleUIService,
  BeagleRemoteView,
  BeagleProvider,
  BeagleConfig,
  BeagleUIService,
}
