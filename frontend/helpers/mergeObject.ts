export const mergeObject = (target: Object, ...sources: Array<Object>) => {
  const [source, ...others] = sources;
  if (!source) return target;
  if (others?.length) mergeObject(source, ...others);

  for (let key of Object.keys(source)) {
    if (source[key] instanceof Object) mergeObject(source[key], mergeObject(target[key], source[key]));
  }

  return Object.assign(target ?? {}, source);
};
