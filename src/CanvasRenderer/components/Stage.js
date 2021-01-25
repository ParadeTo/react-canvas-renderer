import Layer from './Layer'
export default class Stage extends Layer {
  constructor(renderDom, width, height) {
    super(0, 0, '')
    this.width = width
    this.height = height
    var canvas = document.createElement('canvas')
    canvas.height = width
    canvas.width = height
    canvas.style.border = '1px solid black'
    this.context = canvas.getContext('2d')
    renderDom.appendChild(canvas)
  }
  render() {
    this.context.clearRect(0, 0, this.width, this.height)
    this.renderChildren()
  }
}
