import Layer from './Layer'
export default class Stage extends Layer {
  constructor({renderDom, width, height, style}) {
    super(0, 0, '')
    this.width = width
    this.height = height
    var canvas = document.createElement('canvas')
    canvas.height = height
    canvas.width = width

    Object.keys(style).forEach((prop) => {
      canvas.style[prop] = style[prop]
    })

    this.context = canvas.getContext('2d')
    renderDom.appendChild(canvas)
  }
  render() {
    this.context.clearRect(0, 0, this.width, this.height)
    this.renderChildren()
  }
}
