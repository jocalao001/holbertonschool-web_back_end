/* eslint-disable */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // get method for amount
  get amount() {
    return this._amount;
  }

  // set method for amount
  set amount(value) {
    this._amount = value;
  }

  // get method for currency
  get currency() {
    return this._currency;
  }

  // set method for currency
  set currency(value) {
    this._currency = value;
  }

  // returns the attributes in the following format
  // amount currency_name (currency_code)
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // new method static
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
