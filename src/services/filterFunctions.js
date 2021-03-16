export function removeKeysArrayObj(arrayObjToRemove, key) {
  const toRemove = [...arrayObjToRemove];
  toRemove.forEach((e) => {
    delete e[key];
  });
  return toRemove;
}

export function filterArrayObjByString(arrToFilter, key, expression) {
  arrToFilter.filter((e) => e[key].includes(expression));
}

export function filterArrayObjByNumber(arrToFilter, key, comparator, value) {
  const replaceComma = value.replace(',', '.');
  const numberValue = parseFloat(replaceComma);
  return arrToFilter.filter((e) => {
    const replaceCommaElement = e[key].replace(',', '.');
    const numberValueElement = parseFloat(replaceCommaElement);
    switch (comparator) {
    case 'greater':
      return numberValueElement > numberValue;
    case 'smaller':
      return numberValueElement < numberValue;
    case 'equal':
      return numberValueElement === numberValue;
    default:
      return false;
    }
  });
}

export function setNumericFilter(filters, setter, form) {
  const { columnFilter, comparisonFilter, valueFilter } = form;
  const { filterByNumericValues } = filters;
  const setObj = filterByNumericValues.filter((e) => (
    e.column !== columnFilter
  ));
  const formObj = {
    column: columnFilter,
    comparison: comparisonFilter,
    value: valueFilter,
  };
  setter({
    ...filters,
    filterByNumericValues: [
      ...setObj,
      formObj,
    ],
  });
}

export function removeFromNumericFilter(getter, setter, name) {
  const { filterByNumericValues } = getter;
  const setObj = filterByNumericValues.filter((e) => (
    e.column !== name
  ));
  setter({
    ...getter,
    filterByNumericValues: [
      ...setObj,
    ],
  });
}
