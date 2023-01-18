export const UNITS = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'] as const

export type Unit = typeof UNITS[number]

export type Variant = "long" | "short" | "narrow"

export type Locale = {
  name: string,
  units: LocaleUnits
}

export type LocaleUnits = {
  [key in Unit]: LocaleUnit
}

export type LocaleUnit = {
  singular: string,
  plural: string,
  count: Counts,
  relative: {
    [num: string]: string
  },
  future: Counts,
  past: Counts,
}

export type Counts = {
  zero?: string,
  one: string,
  two?: string,
  few?: string,
  many?: string,
  other: string
}


