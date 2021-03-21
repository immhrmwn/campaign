import { render } from '@testing-library/react'
import App from './app'

describe('testing app components', () => {
  it('should render app components correctly', () => {
    const elementApp = render(<App/>)
    console.log(elementApp)
  })
})