import React, { Fragment, FC } from 'react'
import { map, uniqueId } from 'lodash'
import { BeagleUIElement } from 'beagle-core'
import { BeagleConfig } from './types'

const createReactComponentTree = <Schema>(
  components: BeagleConfig<Schema>['components'],
  ui: BeagleUIElement<Schema>,
): JSX.Element => {
  const { type, children, key = uniqueId(), ...props } = ui
  const Component = components[type]

  if (!Component) {
    console.error(`Error: server driven UI could not find component ${type}. This component and its children won't be rendered.`)
    return React.createElement(Fragment)
  }

  const componentChildren = map(children, child => createReactComponentTree(components, child))
  const componentProps = { ...props, key, beagleUiTree: ui }

  return React.createElement(Component as FC<any>, componentProps, componentChildren)
}

export default createReactComponentTree
