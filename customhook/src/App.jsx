import useWindowWidth from "./customHook/useWindowWidth";

// component using the hook
export default function App() {
  const width = useWindowWidth();

  return <h1>Window width: {width}px</h1>;
}
