import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./component/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import DashboardSetting from "./pages/DashboardSetting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSetting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
