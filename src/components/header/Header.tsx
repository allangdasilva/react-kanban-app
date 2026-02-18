import GitHubIcon from "../../icons/GitHubIcon";
import ToggleTheme from "../../ui/header/ToggleTheme";

const Header = () => {
  return (
    <header>
      <div className="relative flex items-center justify-between gap-3 min-[280px]:justify-end">
        <div className="min-[280px]:absolute inset-0 flex items-center justify-start z-10 md:justify-center">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>

        <div className="relative w-full max-w-55 z-20">
          <ToggleTheme />
        </div>
      </div>
    </header>
  );
};

export default Header;
