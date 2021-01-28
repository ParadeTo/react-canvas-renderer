import Reconciler from 'react-reconciler'
import Circle from './components/Circle'
import Rect from './components/Rect'
import Text from './components/Text'
import Stage from './components/Stage'

const HostConfig = {
  createInstance: function (
    type,
    newProps,
    rootContainerInstance,
    currentHostContext,
    workInProgress
  ) {
    let element
    switch (type) {
      case 'rect':
        element = new Rect(newProps)
        break
      case 'circle':
        element = new Circle(newProps)
        break
      case 'text':
        element = new Text(newProps)
        break
      default:
        break
    }
    return element
  },
  appendInitialChild(parent, child) {
    parent.appendChild(child)
  },
  appendChildToContainer(parent, child) {
    parent.appendChild(child)
  },
  appendChild: function (parent, child) {
    parent.appendChild(child)
  },
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {
    const changedProps = {}
    Object.keys(newProps).forEach((k) => {
      if (newProps[k] !== oldProps[k]) {
        changedProps[k] = newProps[k]
      }
    })
    return changedProps
  },
  commitUpdate: function (
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    instance.update(newProps)
  },
  supportsMutation: true,
  getRootHostContext(nextRootInstance) {
    const rootContext = {}
    return rootContext
  },
  getChildHostContext: function (parentContext, fiberType, rootInstance) {
    const context = {}
    return context
  },
  removeChild(parent, child) {
    parent.removeChild(child)
  },
  // 暂时不需要的接口
  finalizeInitialChildren: function () {},
  prepareForCommit: function (rootContainerInstance) {
    return null
  },
  resetAfterCommit: function (rootContainerInstance) {
    rootContainerInstance.render()
  },
  appendAllChildren(...args) {},
  commitTextUpdate: function (textInstance, oldText, newText) {},
  insertBefore: (parentInstance, child, beforeChild) => {},
  removeChildFromContainer(container, child) {},
  commitMount: (domElement, type, newProps, fiberNode) => {},
  clearContainer(...args) {},
  createTextInstance: function (
    newText,
    rootContainerInstance,
    currentHostContext,
    workInProgress
  ) {},
  shouldSetTextContent: function (...args) {},
}
const reconcilerInstance = Reconciler(HostConfig)

const CanvasRenderer = {
  render(element, renderDom, width, height, callback) {
    const stage = new Stage(renderDom, width, height)
    const isAsync = false // Disables async rendering
    const container = reconcilerInstance.createContainer(stage, isAsync) // Creates root fiber node.
    const parentComponent = null // Since there is no parent (since this is the root fiber). We set parentComponent to null.
    debugger
    reconcilerInstance.updateContainer(
      element,
      container,
      parentComponent,
      callback
    ) // Start reconcilation and render the result
  },
}

export default CanvasRenderer
