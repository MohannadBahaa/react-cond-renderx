import React from "react";

/**
 * @description
 * @interface Rcrx
 */
interface Rcrx {
  predicate: boolean;
  components: Array<{ comp: any; props: any }>;
}

/**
 * @description
 * @param {Rcrx} params
 * @returns
 */
function predicate(params: Rcrx) {
  let _isBoolean = typeof params.predicate === "boolean";
  return _isBoolean && params.predicate;
}

function exec(params: Rcrx) {
  if (predicate(params)) {
    return React.cloneElement(
      params.components[0].comp,
      params.components[0].props,
      null
    );
  } else {
    return React.cloneElement(
      params.components[1].comp,
      params.components[1].props,
      null
    );
  }
}

export { predicate, exec };
