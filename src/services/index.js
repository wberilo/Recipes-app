const renderIngredient = (ingredient) => {
  const parameter = 1;
  const { name, measure } = ingredient;
  if (measure.length <= parameter) {
    const newMeasure = parseInt(measure, 10);
    if (newMeasure < parameter) return `- ${name}`;
  }
  return `${name} | ${measure}`;
};

export default renderIngredient;
