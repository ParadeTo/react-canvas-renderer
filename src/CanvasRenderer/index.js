import Reconciler from 'react-reconciler'
import Circle from './components/Circle'
import Rect from './components/Rect'
import Stage from './components/Stage'

const HostConfig = {
  getRootHostContext(nextRootInstance) {
    let rootContext = {name: 'root'}
    // 这个会传给 child
    return rootContext
  },
  getChildHostContext: function (parentContext, fiberType, rootInstance) {
    console.log('getChildHostContext', ...arguments)
    let context = {}
    return context
  },
  shouldSetTextContent: function (...args) {
    // If the function returns true,
    // the text would be created inside
    // the host element and no new text
    // element would be created separately.

    // If this returned true, the next
    // call would be to createInstance
    // for the current element and
    // traversal would stop at this
    // node (children of this element wont be traversed).

    // If it returns false, getChildHostContext
    //  and shouldSetTextContent will be called
    //  on the child elements and it will
    // continue till shouldSetTextContent
    // returns true or if the recursion
    // reaches the last tree endpoint which
    // usually is a text node. When it reaches
    // the last leaf text node it will call
    // createTextInstance
    console.log('shouldSetTextContent', ...args)
    return false
  },
  createTextInstance: function (
    newText,
    rootContainerInstance,
    currentHostContext,
    workInProgress
  ) {
    console.log('createTextInstance', ...arguments)
    return document.createTextNode(newText)
  },
  createInstance: function (
    type,
    newProps,
    rootContainerInstance,
    currentHostContext,
    workInProgress
  ) {
    // console.log('createInstance', ...arguments)
    // const element = document.createElement(type)
    // element.className = newProps.className || ''
    // element.style = newProps.style
    // if (newProps.onChange) {
    //   element.addEventListener('change', newProps.onChange)
    // }
    // if (newProps.onClick) {
    //   element.addEventListener('click', newProps.onClick)
    // }
    let element
    switch (type) {
      case 'rect':
        element = new Rect(newProps)
        break
      case 'circle':
        element = new Circle(newProps)
        break
      default:
        break
    }
    return element
  },
  appendInitialChild: function (parent, child) {
    console.log('appendInitialChild', ...arguments)
    parent.appendChild(child)
  },
  finalizeInitialChildren: function (
    instance, // The instance is the dom element after appendInitialChild.
    type,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {
    console.log('finalizeInitialChildren', ...arguments)
    return newProps.autofocus
  },
  prepareForCommit: function (rootContainerInstance) {
    console.log('prepareForCommit', ...arguments)
  },
  resetAfterCommit: function (rootContainerInstance) {
    console.log('resetAfterCommit', ...arguments)
  },
  appendAllChildren(...args) {
    console.log('appendAllChildren', ...args)
  },
  appendChildToContainer(parent, child) {
    console.log('appendChildToContainer', ...arguments)
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
    return
  },
  commitUpdate: function (
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    return //return nothing.
  },
  commitTextUpdate: function (textInstance, oldText, newText) {
    textInstance.nodeValue = newText
  },
  appendChild: function (parentInstance, child) {
    parentInstance.appendChild(child)
  },
  insertBefore: (parentInstance, child, beforeChild) => {
    parentInstance.insertBefore(child, beforeChild)
  },
  removeChildFromContainer(container, child) {
    console.log('removeChildFromContainer', ...arguments)
    container.remove(child)
  },
  commitMount: (domElement, type, newProps, fiberNode) => {
    domElement.focus()
  },
  clearContainer(...args) {
    console.log('clearContainer', ...args)
  },
  supportsMutation: true,
}
const reconcilerInstance = Reconciler(HostConfig)

const CanvasRenderer = {
  render(element, renderDom, callback) {
    // element: This is the react element for App component
    // renderDom: This is the host root element to which the rendered app will be attached.
    // callback: if specified will be called after render is done.
    const stage = new Stage(renderDom, 500, 500)
    const isAsync = false // Disables async rendering
    const container = reconcilerInstance.createContainer(stage, isAsync) // Creates root fiber node.
    debugger
    const parentComponent = null // Since there is no parent (since this is the root fiber). We set parentComponent to null.
    reconcilerInstance.updateContainer(
      element,
      container,
      parentComponent,
      callback
    ) // Start reconcilation and render the result
  },
}

export default CanvasRenderer
