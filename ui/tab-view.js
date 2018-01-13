const BaseComponent = require("../base")

class TabView extends BaseComponent {
  constructor() {
    super()
    this.actionItemsMock = []
    this.actionItems = {
      addItem: (a) => {this.actionItemsMock.push(a)},
      removeItem: (a) => {this.actionItemsMock.splice(this.actionItemsMock.indexOf(a), 1)}
    }
  }
}
class TabViewItem extends BaseComponent {
}

module.exports = {
  TabView, TabViewItem
}
