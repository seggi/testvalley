type FormatNumberOptions = {
  locales?: string | string[];
  currency?: string;
  style?: string;
  decimals?: number;
};

/**
 * @param {int|string} num
 * @param {object} options
 * @returns {string} a formatted number with grouped thousands separated by commas
 */
export default function formatNumber(
  num: number | string,
  options?: FormatNumberOptions | null
): number | string {
  try {
    let number = Number(String(num || "").replace(/[^0-9.]/g, ""));
    const { locales = "en", currency, style, decimals = 0 } = options || {};

    number = Number.isNaN(number) ? 0 : number;

    let formattedNumber: number | string = number;

    formattedNumber =
      options === null
        ? number
        : new Intl.NumberFormat(locales || "en-US", {
            style: style || "decimal",
            minimumFractionDigits:
              typeof Number(decimals) === "number" ? decimals : 0,
          }).format(number);

    return currency ? `${formattedNumber} ${currency}` : formattedNumber;
  } catch (error) {
    return num;
  }
}
