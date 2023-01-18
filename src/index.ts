import { Locale, Unit } from "./types";
export { getLocale } from "./importer";

export function getUnitSingular(unit: Unit, locale: Locale) {
  return locale.units[unit].singular
}

export function getUnitPlural(unit: Unit, locale: Locale) {
  return locale.units[unit].plural
}

export function formatDuration(num: number, unit: Unit, locale: Locale) {
  const pl = new Intl.PluralRules(locale.name);
  const form = pl.select(num);
  const u = locale.units[unit]
  return (u.count[form] ?? u.count.other).replace('{0}', num.toString());
}

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

