class BaseComponent {
  constructor() {
    this._eventListener = []
  }
  addChild() {
  }
  addEventListener(name, func, node) {
    this._eventListener[name] = func
  }
  removeEventListener(name, func, node) {
    this._eventListener[name] = null
  }
}

module.exports = BaseComponent
