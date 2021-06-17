import { ReactNode } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames/bind"
import Icon from "./Icon"
import Badge from "./Badge"
import styles from "./AppHeader.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { navStateSelector } from "../redux/global/selector"
import { updateNavState } from "../redux/global"

const cx = classNames.bind(styles)

interface Props {
  logo: ReactNode
  menu: MenuItem[]
  connect: ReactNode
  border?: boolean
  testnet?: boolean
}

const AppHeader = ({ logo, menu, connect, border, testnet }: Props) => {
  const navState = useSelector(navStateSelector)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(updateNavState(!navState))
  }

  return (
    <header className={cx(styles.header, { collapsed: true })}>
      <div className={styles.container}>
        <section className={styles.wrapper}>
          <button className={styles.toggle} onClick={toggle}>
            <Icon name={navState ? "menu_open" : "menu"} size={24} />
          </button>
          <h1>
            <Link to="/" className={styles.logo}>
              {logo}
            </Link>
          </h1>

          {testnet && <Badge className={styles.badge}>Testnet</Badge>}
        </section>

        <section className={styles.support}>
          <div className={styles.connect}>{connect}</div>
        </section>
      </div>
    </header>
  )
}

export default AppHeader
