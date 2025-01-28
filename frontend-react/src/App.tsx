import { useEffect, useState } from "react";
import { api } from "./lib/api";

function App() {
  const [totalSpent, setTotalSpend] = useState(0);
  useEffect(() => {
    const update = async () => {
      const res = await api.expenses.totalSpent.$get();
      const json = await res.json();
      setTotalSpend(json.total);
    };
    update();
  }, []);
  return (
    <div className="w-[350px] m-1 p-2 shadow-md shadow-blue-500 rounded-xl mx-auto">
      <div className="border-b-2 border-blue-100 flex flex-col items-center gap-2">
        <h1 className="text-xl">Total Spent</h1>
        <p>The total amount you've spent</p>
      </div>
      <div>
        <p>{totalSpent} today</p>
      </div>
    </div>
  );
}

export default App;
