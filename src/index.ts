import React from "react";
type PredicateType = () => boolean;
type ComponentsType = Array<{ comp: any; props: any }>;
type ParamsType = { predicate: PredicateType; components: ComponentsType };

function rcrx(params: ParamsType) {
  if (params.predicate()) {
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
