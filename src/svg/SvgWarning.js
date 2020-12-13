import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWarning(props) {
  return (
    <Svg
      width={22}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 19h22L11 0 0 19zm3.47-2L11 3.99 18.53 17H3.47zM10 14h2v2h-2v-2zm0-6h2v4h-2V8z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgWarning;
