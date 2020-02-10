import { FC } from 'react'
import {
  BeagleConfig as BeagleCoreConfig,
  BeagleUIService as BeagleCoreUIService,
  DefaultSchema,
} from 'beagle-core'

export interface BeagleConfig<Schema = DefaultSchema> extends BeagleCoreConfig<Schema> {
  components: { error: FC, loading: FC } & {
    [K in keyof Schema]: FC<Schema[K]>
  },
}

export interface BeagleUIService<Schema = DefaultSchema> extends BeagleCoreUIService<Schema> {
  getConfig: () => BeagleConfig<Schema>,
}
