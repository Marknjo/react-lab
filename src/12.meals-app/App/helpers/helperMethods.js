/**
 * Formats a number given locale and options object
 * (Internal locale)
 *
 * @param {Number} amount Amount to formart number
 * @param {String} [locale?] default to en-US - local formater
 * @param {Object{}} [options?] Options to format
 * @returns String
 */
export const formatNumber = function (
  amount,
  locale = 'en-US',
  options = {
    style: 'currency',
    currency: 'USD',
  }
) {
  return new Intl.NumberFormat(locale, options).format(amount);
};
