const BaseComponent = require("../base")

class ActionBar extends BaseComponent {
  constructor() {
    super()
    this.actionItemsMock = []
    this.actionItems = {
      addItem: (a) => {this.actionItemsMock.push(a)},
      removeItem: (a) => {this.actionItemsMock.splice(this.actionItemsMock.indexOf(a), 1)}
    }
  }
}
class ActionItem extends BaseComponent {
}
class NavigationButton extends BaseComponent {
}

module.exports = {
  ActionBar, ActionItem, NavigationButton
}
