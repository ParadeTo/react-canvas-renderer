import Layer from './Layer'

export default class Circle extends Layer {
  constructor({x, y, radius, color}) {
    super(x, y, color)
    this.radius = radius
  }

  render() {
    const {x, y, stage} = this.resolvePosAndStage()
    if (!stage) return
    stage.context.beginPath()
    stage.context.arc(x, y, this.radius, 0, 2 * Math.PI, true)
    stage.context.strokeStyle = this.color
    stage.context.stroke()

    this.renderChildren()
  }
}
