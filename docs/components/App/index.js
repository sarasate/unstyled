import React from 'react'
import { Container,Button, Header ,NavBar} from 'unstyled'
import styled from 'styled-components'

const Brand = styled.div`
font-weight: bold;
`

const App = () => (
  <div>
    <NavBar><Container><Brand>Unstyled</Brand></Container></NavBar>
  <Container>
    <Header>Elements</Header>
  <Button>Basic Button</Button>
  </Container>
  </div>
)

export default App
