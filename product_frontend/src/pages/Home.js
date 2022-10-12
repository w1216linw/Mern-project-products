import { HomeProvider } from "../contexts/homeContext";
import Items from '../components/Items';
import ItemDetails from "../components/ItemDetails";
import AutoMsgBar from "../components/AutoMsgBar";
import '../styles/home.css'

const Home = () => {

  return (
    <HomeProvider>
      <AutoMsgBar />
      <Items />
      <ItemDetails />
    </HomeProvider>
  )
}

export default Home;