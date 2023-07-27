export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._code = name;
  }

  get code() {
    this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
