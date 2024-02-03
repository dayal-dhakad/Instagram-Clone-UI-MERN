import { useState } from "react";
import "./App.css";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-slate-200">
      <div className="w-[50%] mx-auto">
        {loading ? <Loading /> :
         <div>This is homepage</div>}
      </div>
    </div>
  );
}

export default App;
