import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLight(props) {
  return (
    <Svg
      width={16}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 0c-.46 0-.93.04-1.4.14C3.84.67 1.64 2.9 1.12 5.66c-.48 2.61.48 5.01 2.22 6.56.43.38.66.91.66 1.47V16c0 1.1.9 2 2 2h.28a1.98 1.98 0 003.44 0H10c1.1 0 2-.9 2-2v-2.31c0-.55.22-1.09.64-1.46A6.956 6.956 0 0015 7c0-3.87-3.13-7-7-7zm2 16H6v-1h4v1zm0-2H6v-1h4v1zm1.31-3.26c-.09.08-.16.18-.24.26H4.92c-.08-.09-.15-.19-.24-.27-1.32-1.18-1.91-2.94-1.59-4.7.36-1.94 1.96-3.55 3.89-3.93.34-.07.68-.1 1.02-.1 2.76 0 5 2.24 5 5 0 1.43-.61 2.79-1.69 3.74z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgLight;
