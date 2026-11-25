import { useEffect, useState } from "react";

// Hash routing (#/about) works on any host without server rewrites.
const read = () => window.location.hash.slice(1).replace(/\/+$/, "") || "/";

export function useRoute() {
  const [path, setPath] = useState(read);
  useEffect(() => {
    const on = () => setPath(read());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return path;
}
