import { Button, ButtonGroup, Show } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
const App = () => {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main" `
    }} >
      <GridItem area="nav" bg="coral" >Nav </GridItem>
      <Show above="lg" >
      <GridItem area="aside" bg="gold" >Aside</GridItem>
      </Show>
      <GridItem area="main" bg="dogerblue" >Nav </GridItem>

    </Grid>
  )
}

export default App
