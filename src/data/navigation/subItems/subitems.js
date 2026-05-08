// WOMEN
const womenContext = require.context("./women", false, /\.js$/);

const women = womenContext.keys().reduce((acc, file) => {
  const mod = womenContext(file);

  const key = file.replace("./", "").replace(".js", "");

  const exportKey = Object.keys(mod).find((k) => k.endsWith("_DESIGNS"));

  if (exportKey) {
    acc[key] = mod[exportKey];
  }

  return acc;
}, {});

// MEN
const menContext = require.context("./men", false, /\.js$/);

const men = menContext.keys().reduce((acc, file) => {
  const mod = menContext(file);

  const key = file.replace("./", "").replace(".js", "");

  const exportKey = Object.keys(mod).find((k) => k.endsWith("_DESIGNS"));

  if (exportKey) {
    acc[key] = mod[exportKey];
  }

  return acc;
}, {});

// CUSTOMISATION
const customContext = require.context("./customisation", false, /\.js$/);

const customisation = customContext.keys().reduce((acc, file) => {
  const mod = customContext(file);

  const key = file.replace("./", "").replace(".js", "");

  const exportKey = Object.keys(mod).find((k) => k.endsWith("_DESIGNS"));

  if (exportKey) {
    acc[key] = mod[exportKey];
  }

  return acc;
}, {});

// FINAL EXPORT
export const SUBITEMS = {
  ...women,
  ...men,
  ...customisation,
};
