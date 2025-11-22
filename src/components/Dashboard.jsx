import { Lock } from "lucide-react"
import { Link } from "react-router-dom"

const Dashboard = ({ isAdmin = true }) => {
  return (
    isAdmin && (
      <Link
        className="bg-gray-300 hover:bg-red-600 px-3 rounded-md font-medium transition duration-300 ease-in-out flex items-center mr-5" to={"/secret-dashboard"}>
        <Lock className="inline-block mr-2" size={25} />
        <span className="sm:inline ">Dashboard</span>
      </Link>
    )
  );
}

export default Dashboard
