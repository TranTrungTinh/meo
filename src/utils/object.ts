import isEqual from 'lodash/isequal';

export const flatRoutes = (origins: any, start: any[]): any[] => {
  return origins.reduce((pre: any, cal: any) => {
    if (cal.path) {
      if (cal.children) {
        return flatRoutes(cal.children, pre)
      } else {
        pre.push(cal)
      }
    }
    return pre
  }, start)
}

export const standardizedParams = (input: AnyObject) => {
  return Object.entries(input).reduce(
    (a, [k, v]) => (v ? { ...a, [k]: v } : a),
    {}
  )
}

export const addWhen = (condition: any, value: any) => {
  if (Array.isArray(value)) return condition ? value : []
  return condition ? [value] : []
}

export function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const findFirst = (tree: AnyObject, childrenKey: string, objToFindBy: AnyObject) => {
  let treeToReturn = tree;
  let found = false;
  const findKeys = Object.keys(objToFindBy);
  findKeys.forEach((key) => {
    isEqual(tree[key], objToFindBy[key]) ? found = true : found = false;
  });
  if (found) {
    return tree;
  }
  const findInChildren = (obj: AnyObject, childrenKey: string, objToFindBy: AnyObject) => {
    let foundInChild = false;
    if (obj.hasOwnProperty(childrenKey)) {
      for (let i = 0; i < obj[childrenKey].length; i++) {
        findKeys.forEach((key) => {
          isEqual(obj[childrenKey][i][key], objToFindBy[key]) ? foundInChild = true : foundInChild = false;
        });
        if (foundInChild) {
          found = true;
          treeToReturn = obj[childrenKey][i];
          break;
        }
      }
      if (!foundInChild && !found) {
        obj[childrenKey].forEach((child: AnyObject) => findInChildren(child, childrenKey, objToFindBy));
      }
    }
    return obj;
  };
  findInChildren(tree, childrenKey, objToFindBy);
  return found ? treeToReturn : false;
};