import { NavBar } from "../NavBar/NavBar"



export const Header = ({ brand, links }) => {
  return (
    <>
      <header>
        <NavBar brand={brand} links={links}></NavBar>
      </header>
    </>
  )
}
