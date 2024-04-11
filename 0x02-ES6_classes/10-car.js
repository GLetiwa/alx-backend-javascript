/* eslint-disable */
const cloneCarKey = Symbol('cloneCar');
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  [cloneCarKey]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
  cloneCar() {
    return this[cloneCarKey](); 
  }
}

export default Car;
