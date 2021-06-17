import routes from "../routes"
import Container from "../components/Container"
import { SettingsProvider, useSettingsState } from "../hooks/useSettings"
import { ContractProvider, useContractState } from "../hooks/useContract"
import useConnectGraph from "../hooks/useConnectGraph"
import useAddress from "../hooks/useAddress"
import { StatsProvider, useStatsState } from "../statistics/useStats"
import DelistAlert from "./DelistAlert"
import Airdrop from "./Airdrop"
import Header from "./Header"
import Footer from "./Footer"
import "./App.scss"
import AppSidebar from "../components/AppSidebar"

const App = () => {
  const address = useAddress()
  const settings = useSettingsState()
  const contract = useContractState(address)
  const stats = useStatsState()
  useConnectGraph(address)
  return (
    <SettingsProvider value={settings}>
      <ContractProvider value={contract}>
        <StatsProvider value={stats}>
          <Header />
          <div className="nav-flex">
            <AppSidebar />
            <Container>
              {address && <DelistAlert />}
              {routes()}
            </Container>
          </div>
          <Footer />
          {address && <Airdrop />}
        </StatsProvider>
      </ContractProvider>
    </SettingsProvider>
  )
}

export default App
