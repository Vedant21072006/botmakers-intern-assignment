import BotLeague from "./components/botleagueDetails/botleague"
import CompetitionDisciplines from "./components/competition/CompetionDisciplin"
import LeagueAdvantage from "./components/competitionAdvantage/LeagueAdv"
import JoinEcosystem from "./components/footer/footpage"
import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"
import CompetionAndEvents from "./components/CompetitionAndEvents/CompetitionAndEvents"
import UserJourney from "./components/userjourney/userJourney"

const App=()=>{
  return(
    <>
    <Navbar/>
    <Hero/>
    <CompetionAndEvents/>
    <UserJourney/>
    <BotLeague/>
    <CompetitionDisciplines/>
    <LeagueAdvantage/>
    <JoinEcosystem/>
    </>
  )
}
export default App