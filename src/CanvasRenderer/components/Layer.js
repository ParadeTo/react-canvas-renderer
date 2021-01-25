export default class Layer {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.color = color
    this.parent = null
    this.__children = []
  }

  resolvePosAndStage() {
    let x = this.x
    let y = this.y
    let p = this.parent
    if (!p) return {}
    while (!p.context) {
      x += p.x
      y += p.y
      p = p.parent
    }
    return {stage: p, x, y}
  }

  appendChild(child) {
    this.__children.push(child)
    child.parent = this
    this.render()
  }

  renderChildren() {
    for (let child of this.__children) {
      child.render()
    }
  }

  update(props) {
    Object.keys(props).forEach((k) => {
      this[k] = props[k]
    })
    const {stage} = this.resolvePosAndStage()
    if (stage) stage.render()
  }
}
