/**
 * Price Formater
 * @param {Number} price Price amount
 * @param {String} [locale?] which locale to format the price i.e. 'en-US
 * @param {Object{}} [options?] Object of options for the configurations
 * @returns
 */
const priceFormatter = (
  price,
  locale = 'en-US',
  options = {
    currency: 'USD',
    style: 'currency',
  }
) => {
  return new Intl.NumberFormat(locale, options).format(price);
};

export default priceFormatter;
