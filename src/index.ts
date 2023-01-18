import { Locale, Unit } from "./types";
export { getLocale } from "./importer";

/**
 * Return the raw unit name in singular form, for example
 * "day", "week".
 */
export function getUnitSingular(unit: Unit, locale: Locale) {
  return locale.units[unit].singular
}

/**
 * Return the raw unit name in plural form, for example
 * "days", "weeks".
 */
export function getUnitPlural(unit: Unit, locale: Locale) {
  return locale.units[unit].plural
}

/**
 * Return a duration as a string, for example "1 day", "2 weeks".
 */
export function formatDuration(num: number, unit: Unit, locale: Locale): string {
  const pl = new Intl.PluralRules(locale.name);
  const form = pl.select(num);
  const u = locale.units[unit]
  return (u.count[form] ?? u.count.other).replace('{0}', num.toString());
}

/**
 * Return a duration relative to now as a string. Special cases
 * like "tomorrow", "yesterday" and "next week" will be used unless
 * `{alwaysNumeric: false}` is specified in the `options` argument.
 *
 * @example
 * // returns "in 3 days"
 * formatRelativeDuration(3, 'day', locale)
 *
 * // returns "2 weeks ago"
 * formatRelativeDuration(-2, 'week', locale)
 *
 * // returns "tomorrow"
 * formatRelativeDuration(1, 'day', locale)
 *
 * // returns "in 1 day"
 * formatRelativeDuration(1, 'day', locale, {alwaysNumeric: true})
 */
export function formatRelativeDuration(
  num: number,
  unit: Unit,
  locale: Locale,
  options?: {
    alwaysNumeric?: boolean
  }
) {
  const u = locale.units[unit]
  if (u.relative?.[num] != null && !options?.alwaysNumeric) {
    return u.relative?.[num];
  }
  else {
    const pl = new Intl.PluralRules(locale.name);
    const form = pl.select(num);
    if (num >= 0) {
      return (u.future[form] ?? u.future.other).replace('{0}', num.toString());
    }
    else {
      return (u.past[form] ?? u.past.other).replace('{0}', (-num).toString());
    }
  }
}

