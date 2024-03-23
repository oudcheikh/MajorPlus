import React from 'react';
import { useTransition, animated } from 'react-spring';

const TransitionComponent = ({ item, delay, children }) => {
  const transitions = useTransition(item !== null ? item : '', {
    from: { transform: 'translateY(-50%)', opacity: 0 },
    enter: { transform: 'translateY(0)', opacity: 1 },
    config: { tension: 100, friction: 20 },
    delay,
  });

  return transitions((style, innerItem) =>
    innerItem !== '' ? (
      <animated.div style={style}>
        {typeof children === 'function' ? children(innerItem) : children}
      </animated.div>
    ) : null
  );
};

export default TransitionComponent;
