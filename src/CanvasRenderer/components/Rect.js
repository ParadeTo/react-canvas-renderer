import Layer from './Layer'
export default class Rect extends Layer {
  constructor({x, y, width, height, color}) {
    super(x, y, color)
    this.width = width
    this.height = height
  }

  render() {
    const {x, y, stage} = this.resolvePosAndStage()
    if (!stage) return
    stage.context.beginPath()
    stage.context.rect(x, y, this.width, this.height)
    stage.context.strokeStyle = this.color
    stage.context.stroke()
    this.renderChildren()
  }
}
