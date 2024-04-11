/* eslint-disable */
class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  
  // setter & getter for name attr
  get name() {
    this._name = name;
  }
  
  set name(newName) {
    this._name = newName;
  }

  // setter & getter for code attr
  get code() {
    this._code = code;
  }

  set codei(newCode) {
    this._code = newCode;
  }

  // class method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
