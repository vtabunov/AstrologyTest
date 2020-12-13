import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function SvgClose(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G opacity={0.43} stroke="#fff" strokeWidth={2}>
        <Path d="M4 4l16 16M20 4L4 20" />
      </G>
    </Svg>
  );
}

export default SvgClose;
