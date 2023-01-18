import axios from "axios";
import { Counts, Locale, LocaleUnit, LocaleUnits, Unit, UNITS, Variant } from "./types";
import { stripKeyPrefix } from "./utils";

const baseUrl = "https://raw.githubusercontent.com/unicode-org/cldr-json/main";

async function getDateFields(localeName: string) {
  const response = await axios.get(`${baseUrl}/cldr-json/cldr-dates-full/main/${localeName}/dateFields.json`)
  return response.data.main[localeName];
}

async function getUnits(localeName: string) {
  const response = await axios.get(
    `${baseUrl}/cldr-json/cldr-units-full/main/${localeName}/units.json`
  );
  return response.data.main[localeName];
}

function getUnit(
  unit: Unit,
  variant: Variant,
  dateFields: any,
  units: any,
): LocaleUnit {
  const unitDateFields = dateFields.dates.fields[
    variant === 'short' ?
      `${unit}-short`
    : variant === 'narrow' ?
      `${unit}-narrow`
    : unit
  ]
  const unitUnits = units.units[variant][`duration-${unit}`]

  return {
    singular: unitDateFields.displayName,
    plural: unitUnits.displayName,
    count: Object.fromEntries(
      Object.entries(unitUnits)
        .filter(([k]) => k.startsWith("unitPattern-count-"))
        .map(([k, v]) => [k.replace(/^unitPattern-count-/, ''), v])
    ) as Counts,
    relative: Object.fromEntries(
      Object.entries(unitDateFields)
        .filter(([k]) => k.startsWith("relative-type-"))
        .map(([k, v]) => [k.replace(/^relative-type-/, ''), v as string])
    ),
    future: stripKeyPrefix(
      unitDateFields["relativeTime-type-future"],
      "relativeTimePattern-count-"
    ) as Counts,
    past: stripKeyPrefix(
      unitDateFields["relativeTime-type-past"],
      "relativeTimePattern-count-"
    ) as Counts,
  }
}

export async function getLocale(
  localeName: string,
  variant: Variant = "long"
): Promise<Locale> {
  const dateFields = await getDateFields(localeName)
  const units = await getUnits(localeName);
  return {
    name: localeName,
    units: Object.fromEntries(
      UNITS.map(u => [u, getUnit(u, variant, dateFields, units)])
    ) as LocaleUnits
  };
}

