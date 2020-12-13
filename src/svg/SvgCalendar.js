import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCalendar(props) {
  return (
    <Svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16 2h-1V0h-2v2H5V0H3v2H2C.89 2 .01 2.9.01 4L0 18a2 2 0 002 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H2V8h14v10zm0-12H2V4h14v2zm-7 4H4v5h5v-5z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgCalendar;
