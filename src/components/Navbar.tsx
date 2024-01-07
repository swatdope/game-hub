import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.jpeg'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


const Navbar = () => {
  return (
    <HStack  >
        <Image src={logo} boxSize={"60px"}/>
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar
