import { ChatPane } from "./components/ChatPane"
import { VisualPane } from "./components/VisualPane"

function App() {

  return (
    <div className="grid grid-cols-2 min-h-screen divide-x">
      <ChatPane/>
      <VisualPane/>
    </div>
  )
}

export default App
