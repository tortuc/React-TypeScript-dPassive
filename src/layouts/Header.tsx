import { useNetwork } from "../hooks"
import logo from "../images/Logo.png"
import AppHeader from "../components/AppHeader"
import { MenuKey, getPath, omit } from "../routes"
import Connect from "./Connect"

const Header = () => {
  const menuKeys = Object.values(MenuKey).filter((key) => !omit.includes(key))
  const menu = menuKeys.map((key: MenuKey) => ({
    attrs: { to: getPath(key), children: key },
  }))

  const { name } = useNetwork()

  return (
    <AppHeader
      logo={<img src={logo}  style={{width:100, height: 40}} alt="Logo" />}
      menu={menu}
      connect={<Connect />}
      testnet={name !== "mainnet"}
    />
  )
}

export default Header
