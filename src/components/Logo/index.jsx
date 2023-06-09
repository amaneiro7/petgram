import { lazy } from 'react'
import { Link } from 'react-router-dom'

const Svg = lazy(() => import('./style').then(module => ({ default: module.Svg })))

export const Logo = (props) => (
  <Link to='/'>
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width={413.506}
      height={122}
      preserveAspectRatio='xMidYMid'
      style={{
        background: '0 0'
      }}
      viewBox='43.247 14 413.506 122'
      {...props}
    >
      <defs>
        <linearGradient
          id='a'
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#ff6d60' />
          <stop offset={1} stopColor='#f3e99f' />
        </linearGradient>
      </defs>
      <path
        fill='url(#a)'
        d='M26.11-42.69q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57H22.4q-.38 0-.7.07L14.34 0H.45l7.87-41.92q6.85-.64 10.82-.7 3.96-.07 6.97-.07ZM69.44-9.86q1.22 1.54 1.22 4.04 0 3.45-2.56 5.28-2.56 1.82-6.6 1.82-2.3 0-5.82-.51-6.91-1.09-9.02-1.09-2.12 0-2.95.1-.83.09-2.17.22l7.87-42.24h27.58q0 3.9-1.89 5.95-1.88 2.05-5.6 2.05-3.71 0-7.48-1.73l-1.99 11.2h11.39q0 3.39-1.66 5.28-1.66 1.89-4.45 1.89-2.78 0-4.51-.64t-1.92-.83l-2.3 12.09q1.53.2 4.41.2 4.93 0 8.45-3.08Zm12.22-21.31q-2.17-1.66-2.17-5.21 0-3.56 2.33-5.41 2.34-1.86 6.37-1.86 2.56 0 8.64.9l4.35.64q2.18.25 4.45.25t3.81-.96q2.3 2.05 2.3 5 0 2.94-2.62 5.05-2.69 2.24-6.14 2.24-1.67 0-4.36-.45-3.13 9.86-3.13 16.71 0 6.85 3.45 10.43-1.6 2.88-3.96 4-2.37 1.12-5.92 1.12-3.56 0-5.76-1.95-2.21-1.95-2.21-5.99 0-4.67 2.56-12.35 2.56-7.61 6.4-13.44-1.86-.19-3.78-.19-3.97 0-4.61 1.47Zm53.96 10.56 12.92-1.15q-4.6 10.11-4.6 21.82-1.73 1.22-4.26 1.22T135.55.1q-1.6-1.19-1.92-2.4-1.6 1.66-4.19 2.62-2.59.96-5.34.96-2.76 0-5.16-.9-2.4-.89-4.25-2.88-4.1-4.35-4.1-12.6 0-12.8 6.85-20.48 7.04-7.94 19.52-7.94 8.64 0 11.71 4.48.96 1.41.96 3.1 0 1.7-.73 3.14-.74 1.44-1.89 2.59-2.75 2.56-6.15 2.56-1.34 0-2.62-.45.26-1.92.26-4.16t-.16-3.26q-.16-1.02-.55-1.86-.83-1.72-2.65-1.72-1.83 0-3.84 1.95-2.02 1.95-3.62 5.15-3.52 7.17-3.52 15.81 0 3.97 1.54 6.78 1.66 3.07 4.6 3.07 1.03 0 1.96-.51.92-.51 1.31-.89l2.05-12.87ZM164.8 0h-13.7l7.81-42.05q6.34-.7 15.59-.7 9.24 0 13.53 2.69 4.29 2.68 4.29 8.09t-2.78 8.8q-2.79 3.39-7.59 4.48 1.09 5.31 3.59 9.6 2.3 4.03 4.99 5.31-.96 2.69-2.91 3.88-1.96 1.18-4.74 1.18-2.78 0-4.96-1.63t-3.9-4.64q-3.65-6.53-4.04-16.83h.45q4.74-.13 7.11-2.6 2.36-2.46 2.36-7.64 0-6.47-5.44-6.72h-1.4q-.58 0-.9.06L164.8 0Zm58.56 1.28q-8.19 0-8.96-11.65h-11.01q-1.28 2.95-2.17 5.51L199.55 0h-8.96l20.16-42.24h13.76l2.69 31.1q.64 6.72 3.2 8.71-1.86 3.71-7.04 3.71ZM208.9-23.17l-3.52 8.13h8.83l-.77-16.45v-1.73l-4.54 10.05ZM239.55 0h-7.36l11.59-42.24h13.37l2.95 24.13L272-42.24h11.2l1.15 31.62q.26 6.27 3.33 8.19-.7 1.28-2.75 2.49-2.05 1.22-4.77 1.22-2.72 0-4.32-.77t-2.5-2.05q-1.6-2.3-1.6-6.72v-19.77L259.14 0h-7.94l-4.48-28.74L239.55 0Z'
        transform='translate(105.935 97.465)'
      />
    </Svg>
  </Link>

)
