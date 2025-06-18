import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" onClick={toggleTheme} className="mb-3 ms-3">
      {theme === "dark" ? (
        <>
          <Sun className="h-12 w-12" />
          <span className="font-semibold">Light</span>
        </>
      ) : (
        <>
          <Moon className="h-12 w-12" />
          <span className="font-semibold">Dark</span>
        </>
      )}
    </Button>
  );
}
