import React from "react";
import { Switch } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import useRouter from "./useRouter";

const AnimatedRoute = ({ children }) => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: "auto" },
    leave: { opacity: 0, height: 0 }
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>{children}</Switch>
    </animated.div>
  ));
};

export default AnimatedRoute;
