import Layer from './Layer'

export default class Circle extends Layer {
  constructor({x, y, radius, color, fill}) {
    super(x, y, color)
    this.radius = radius
    this.fill = fill
  }

  render() {
    const {x, y, stage} = this.resolvePosAndStage()
    if (!stage) return
    stage.context.beginPath()
    stage.context.arc(x, y, this.radius, 0, 2 * Math.PI, true)
    if (this.fill) {
      stage.context.fillStyle = this.color
      stage.context.fill()
    } else {
      stage.context.strokeStyle = this.color
      stage.context.stroke()
    }
    this.renderChildren()
  }
}
