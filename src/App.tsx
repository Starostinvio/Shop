import { RouterProvider } from "react-router-dom";
import { router } from "src/lib/configs/routerConfig";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
