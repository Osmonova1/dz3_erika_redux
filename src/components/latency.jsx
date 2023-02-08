import { useEffect, useState } from "react"

function useLatency(value, delay) {
  const [latencyValue, setLatencyValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setLatencyValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return latencyValue
}

export default useLatency