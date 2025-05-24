import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg text-center max-w-lg w-full border border-gray-700">
        <div className="text-6xl mb-4 text-red-500">🚫</div>
        <h1 className="text-5xl font-bold text-white mb-2">403</h1>
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Access Denied</h2>
        <p className="text-gray-300 mb-6">
          Oops! You don’t have permission to view this page. Please contact the administrator or return to the homepage.
        </p>
        <Button
          onClick={() => navigate('/')}
          size="md"
          radius="md"
          variant="light"
          color="yellow"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default Unauthorized;
