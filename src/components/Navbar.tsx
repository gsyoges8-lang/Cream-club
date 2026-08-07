import Navigation from './Navigation'

type Props = {
  scrolled?: boolean
}

export default function Navbar({ scrolled = false }: Props) {
  return <Navigation scrolled={scrolled} />
}
