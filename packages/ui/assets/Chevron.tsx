import { createIcon } from '@chakra-ui/react'

const Chevron = createIcon({
  displayName: 'Chevron',
  // width:"26",
  // height:"17",
  viewBox: '0 0 26 17',
  // fill:"none",
  // xmlns:"http://www.w3.org/2000/svg",
  path: [
    <line
      x1="24.8226"
      y1="2.06066"
      x2="11.8226"
      y2="15.0607"
      stroke="white"
      strokeWidth="3"
    />,
    <line
      x1="1.06066"
      y1="1.93928"
      x2="14.0607"
      y2="14.9393"
      stroke="white"
      strokeWidth="3"
    />,
  ],
})

export default Chevron
