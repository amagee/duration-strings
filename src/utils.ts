export function stripKeyPrefix(dict: {[key: string]: any}, prefix: string) {
  return Object.fromEntries(
    Object.entries(dict)
      .filter(([k]) => k.startsWith(prefix))
      .map(([k, v]) => [k.replace(new RegExp(`^${prefix}`), ''), v])
  )
}

