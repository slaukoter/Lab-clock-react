import { useEffect, useState } from "react"
import { format } from "date-fns"
import "./App.css"

// Main App component that renders a live-updating clock

export default function App() {
  const [time, setTime] = useState(new Date());

   // Create a state variable 'time' to store the current date/time

  useEffect(() => {

    // Set up an interval to update the time every second

    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

   return (
    <main className="clock">
      <h1>Current Time</h1>
      <p className="time">{format(time, "PPPP p")}</p>
    </main>
  )
}
