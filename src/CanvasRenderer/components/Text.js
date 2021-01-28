import Layer from './Layer'
export default class Text extends Layer {
  constructor({content, fillStyle, x, y, font = '12px serif'}) {
    super(x, y, fillStyle)
    this.content = content
    this.font = font
    this.fillStyle = fillStyle
  }

  render() {
    const {x, y, stage} = this.resolvePosAndStage()
    if (!stage) return
    stage.context.font = this.font
    stage.context.fillStyle = this.fillStyle
    stage.context.fillText(this.content, x, y)
  }
}
