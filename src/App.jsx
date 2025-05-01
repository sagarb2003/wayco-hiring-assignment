import { useState } from 'react'
import { ChatPane } from "./components/ChatPane"
import { VisualPane } from "./components/VisualPane"

function App() {
  const [destination, setDestination] = useState('');

  return (
    <div className="grid grid-cols-2 min-h-screen shadow-lg">
      <ChatPane destination={destination} setDestination={setDestination}/>
      <VisualPane destination={destination}/>
    </div>
  )
}

export default App
