const BaseComponent = require("../base")

class Frame extends BaseComponent {
  constructor() {
    this.navigatedTo = "nowhere yet"
    this.backCallAmount = 0
    this.navigate = (makeComp) => {
      this.navigatedTo = makeComp
    }
    this.goBack = () => {
      this.backCallAmount++
    }
    this.topmost = () => this
  }
}

module.exports = {
  Frame
}
