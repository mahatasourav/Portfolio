import { Moon, Sun } from "lucide-react"; // You can also use react-icons
import { useTheme } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
};

export default DarkModeToggle;
