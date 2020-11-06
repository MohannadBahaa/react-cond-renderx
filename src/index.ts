import React from "react";

/**
 * @description
 * @interface RcrxParams
 */
interface RcrxParams {
  components: Array<{ comp: any; props: any }>;
}

class Rcrx {
  #predicate: Boolean;
  constructor() {
    this.#predicate = false;
  }

  predicate(callback: Function) {
    this.#predicate = callback();
    return this;
  }

  exec(params: RcrxParams) {
    if (this.#predicate) {
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
}

export default new Rcrx();
