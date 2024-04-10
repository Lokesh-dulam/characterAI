import {Provider} from "react-redux"
import store from "./utils/store"
import Home from "./components/Home"
const App = () => {
  return (
    <Provider store={store}>
    <div>
      <Home/>
    </div>
    </Provider>
  )
}

export default App