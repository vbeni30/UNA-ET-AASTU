// Simple performance monitoring utility

// Web Vitals
export function reportWebVitals(metric: any) {
  // You can send the metric to your analytics service
  console.log(metric)

  // Example implementation to send to a hypothetical analytics endpoint
  if (process.env.NODE_ENV === "production") {
    const body = JSON.stringify(metric)
    const url = "/api/analytics"

    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body)
    } else {
      fetch(url, { body, method: "POST", keepalive: true })
    }
  }
}

// Performance marks and measures
export function markAndMeasure(markName: string, measureName: string, startMark?: string) {
  if (typeof performance !== "undefined") {
    try {
      performance.mark(markName)
      if (startMark) {
        performance.measure(measureName, startMark, markName)
      }
      return true
    } catch (e) {
      console.error("Error with performance marking:", e)
      return false
    }
  }
  return false
}

// Clear all performance marks and measures
export function clearPerformanceMarks() {
  if (typeof performance !== "undefined") {
    try {
      performance.clearMarks()
      performance.clearMeasures()
      return true
    } catch (e) {
      console.error("Error clearing performance marks:", e)
      return false
    }
  }
  return false
}

// Get performance data
export function getPerformanceData() {
  if (typeof performance !== "undefined") {
    try {
      const navigationTiming = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      const paintTiming = performance.getEntriesByType("paint")

      return {
        navigationTiming,
        paintTiming,
        // Add more performance metrics as needed
      }
    } catch (e) {
      console.error("Error getting performance data:", e)
      return null
    }
  }
  return null
}

// Monitor long tasks
export function monitorLongTasks() {
  if (typeof window !== "undefined" && "PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log long tasks (tasks that block the main thread for more than 50ms)
          console.warn("Long task detected:", entry)
        }
      })

      observer.observe({ entryTypes: ["longtask"] })
      return observer
    } catch (e) {
      console.error("Error setting up long task observer:", e)
      return null
    }
  }
  return null
}
