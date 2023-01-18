# duration-strings

This package lets you format durations in different forms and in
different locales.

Locales are not included in the package, however we provide a tool
for you to generate them yourself from
[the CLDR Project](https://github.com/unicode-org/cldr-json).

Distributing the locale data is not (currently?) in the scope of this project.

Once you have a `Locale` object, you can try:

```
import {
  getUnitSingular,
  getUnitPlural,
  formatDuration,
  formatRelativeDuration
} from "duration-strings";

// Supported units are second, minute, hour, week, month, year.

>>> getUnitSingular("second", locale)
"second"

>>> getUnitPlural("year", locale)
"years"

>>> formatDuration(1, "week", locale)
"1 week"

>>> formatDuration(7, "month", locale)
"7 months"

>>> formatRelativeDuration(-1, "day", locale)
"yesterday"

>>> formatRelativeDuration(1, "day", locale)
"tomorrow"

>>> formatRelativeDuration(1, "day", locale, {alwaysNumeric: true})
"1 day ago"

>>> formatRelativeDuration(1, "day", locale, {alwaysNumeric: true})
"in 1 day"
```

We do not have functions for generating durations from Date objects, date
ranges, numbers of milliseconds etc.

Released under [MIT License](./LICENSE).
