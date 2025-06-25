import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize to `false` for server-side rendering and initial client render.
  // This ensures no hydration mismatch.
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    // This code only runs on the client.
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Set the initial value on the client after mounting.
    setIsMobile(mql.matches)

    // Update the value whenever the media query status changes.
    const onChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    mql.addEventListener("change", onChange)

    // Clean up the event listener when the component unmounts.
    return () => {
      mql.removeEventListener("change", onChange)
    }
  }, []) // Empty dependency array means this effect runs once on mount.

  return isMobile
}
