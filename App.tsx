import { AppContextProvider } from "./context/AppContext";
import { Main } from "./views/Main";

export default function App() {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
}
