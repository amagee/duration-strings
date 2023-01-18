const { getLocale } = require("./dist/index");

async function main() {
  const locale = process.argv.at(-2);
  const variant = process.argv.at(-1);

  console.log(JSON.stringify(await getLocale(locale, variant), null, 4));
}

main()
