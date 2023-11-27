/* eslint-disable */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // get method to code
  get code() {
    return this._code;
  }

  // set method code
  set code(value) {
    this._code = value;
  }

  // get method to name
  get name() {
    return this._name;
  }

  // set method name
  set name(value) {
    this._name = value;
  }

  // new method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
