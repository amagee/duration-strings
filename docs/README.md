duration-strings

# duration-strings

## Table of contents

### Functions

- [formatDuration](README.md#formatduration)
- [formatRelativeDuration](README.md#formatrelativeduration)
- [getLocale](README.md#getlocale)
- [getUnitPlural](README.md#getunitplural)
- [getUnitSingular](README.md#getunitsingular)

## Functions

### formatDuration

▸ **formatDuration**(`num`, `unit`, `locale`): `string`

Return a duration as a string, for example "1 day", "2 weeks".

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `unit` | ``"second"`` \| ``"minute"`` \| ``"hour"`` \| ``"day"`` \| ``"week"`` \| ``"month"`` \| ``"year"`` |
| `locale` | `Locale` |

#### Returns

`string`

#### Defined in

[index.ts:23](https://github.com/amagee/duration-strings/blob/16cb496/src/index.ts#L23)

___

### formatRelativeDuration

▸ **formatRelativeDuration**(`num`, `unit`, `locale`, `options?`): `undefined` \| `string`

Return a duration relative to now as a string. Special cases
like "tomorrow", "yesterday" and "next week" will be used unless
`{alwaysNumeric: false}` is specified in the `options` argument.

**`Example`**

```ts
// returns "in 3 days"
formatRelativeDuration(3, 'day', locale)

// returns "2 weeks ago"
formatRelativeDuration(-2, 'week', locale)

// returns "tomorrow"
formatRelativeDuration(1, 'day', locale)

// returns "in 1 day"
formatRelativeDuration(1, 'day', locale, {alwaysNumeric: true})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `unit` | ``"second"`` \| ``"minute"`` \| ``"hour"`` \| ``"day"`` \| ``"week"`` \| ``"month"`` \| ``"year"`` |
| `locale` | `Locale` |
| `options?` | `Object` |
| `options.alwaysNumeric?` | `boolean` |

#### Returns

`undefined` \| `string`

#### Defined in

[index.ts:48](https://github.com/amagee/duration-strings/blob/16cb496/src/index.ts#L48)

___

### getLocale

▸ **getLocale**(`localeName`, `variant?`): `Promise`<`Locale`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `localeName` | `string` | `undefined` |
| `variant` | `Variant` | `"long"` |

#### Returns

`Promise`<`Locale`\>

#### Defined in

[importer.ts:58](https://github.com/amagee/duration-strings/blob/16cb496/src/importer.ts#L58)

___

### getUnitPlural

▸ **getUnitPlural**(`unit`, `locale`): `string`

Return the raw unit name in plural form, for example
"days", "weeks".

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | ``"second"`` \| ``"minute"`` \| ``"hour"`` \| ``"day"`` \| ``"week"`` \| ``"month"`` \| ``"year"`` |
| `locale` | `Locale` |

#### Returns

`string`

#### Defined in

[index.ts:16](https://github.com/amagee/duration-strings/blob/16cb496/src/index.ts#L16)

___

### getUnitSingular

▸ **getUnitSingular**(`unit`, `locale`): `string`

Return the raw unit name in singular form, for example
"day", "week".

#### Parameters

| Name | Type |
| :------ | :------ |
| `unit` | ``"second"`` \| ``"minute"`` \| ``"hour"`` \| ``"day"`` \| ``"week"`` \| ``"month"`` \| ``"year"`` |
| `locale` | `Locale` |

#### Returns

`string`

#### Defined in

[index.ts:8](https://github.com/amagee/duration-strings/blob/16cb496/src/index.ts#L8)
