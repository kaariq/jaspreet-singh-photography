const context = require.context(".", false, /\.js$/);

export const SUBITEMS = context
  .keys()
  .filter((file) => file !== "./subItems.js")
  .reduce((acc, file) => {
    const module = context(file);

    const key = file
      .replace("./", "")
      .replace(".js", "");

    // find exported *_DESIGNS
    const exportKey = Object.keys(module).find((k) =>
      k.endsWith("_DESIGNS")
    );

    if (exportKey) {
      acc[key] = module[exportKey];
    }

    return acc;
  }, {});