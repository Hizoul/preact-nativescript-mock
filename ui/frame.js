const BaseComponent = require("../base")

const topmostFrameMaker = () => {
  this.navigatedTo = "nowhere yet"
  this.backCallAmount = 0
  this.navigate = (makeComp) => {
    this.navigatedTo = makeComp()
  }
  this.goBack = () => {
    this.backCallAmount++
  }
  return this
}

class Frame extends BaseComponent {
}

const topmostFrame = topmostFrameMaker()
Frame.topmost = () => topmostFrame

module.exports = Frame
