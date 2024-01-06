import { Button, ButtonGroup, Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main" `
    }} >
      <GridItem area="nav" >
        <Navbar />
     </GridItem>
      <Show above="lg" >
      <GridItem area="aside" bg="gold" >Aside</GridItem>
      </Show>
      <GridItem area="main" bg="blue" >Nav </GridItem>

    </Grid>
  )
}

export default App
