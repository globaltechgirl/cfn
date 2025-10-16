import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";

import "@/App.css";
import router from "@/router/routes";
import { theme, variablesResolver } from "@/utils/mantine-theme";

function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={variablesResolver}>
      <Notifications position="bottom-right" />
      <RouterProvider router={router} />
    </MantineProvider>
  );
} 

export default App;