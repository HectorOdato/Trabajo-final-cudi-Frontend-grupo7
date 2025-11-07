import { Lock } from "lucide-react"
import { Link } from "react-router-dom"

const Dashboard = ({ isAdmin = true }) => {
  return (
    isAdmin && (
      <Link
        className="bg-red-600 hover:bg-red-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center" to={"/secret-dashboard"}>
        <Lock className="inline-block mr-1" size={18} />
        <span className="hidden sm:inline ml-2">Dashboard</span>
      </Link>
    )
  );
}

export default Dashboard
