import React, { FC, ReactNode, Fragment, useState, useContext, useEffect, createElement } from 'react'
import { LoadParams } from 'beagle-core'
import BeagleContext from './context'
import createReactComponentTree from './renderer'

const BeagleRemoteView: FC<LoadParams> = (loadParams) => {
  const beagleService = useContext(BeagleContext)
  const [renderedTree, setRenderedTree] = useState<ReactNode>()

  const loadUI = async () => {
    if (!beagleService) return
    const beagleUITree = await beagleService.loadBeagleUITree(loadParams)
    const Component = createReactComponentTree(beagleService.getConfig().components, beagleUITree)
    setRenderedTree(Component)
  }

  useEffect(() => {
    loadUI()
   }, [loadParams])

  if (!beagleService) {
    throw Error('Couldn\'t find a ServerDrivenUIProvider in the component tree!')
  }

  if (!beagleService) return null
  const Loading = beagleService.getConfig().components['loading']
  return renderedTree ? <Fragment>{renderedTree}</Fragment> : createElement(Loading)
}

export default BeagleRemoteView
