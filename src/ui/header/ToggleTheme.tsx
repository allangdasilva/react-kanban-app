import React from "react";
import MoonIcon from "../../icons/MoonIcon";
import SunIcon from "../../icons/SunIcon";
import clsx from "clsx";

const ToggleTheme = () => {
  const [isLight, setIsLight] = React.useState(false);

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isLight) {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [isLight]);

  return (
    <button
      onClick={() => setIsLight(!isLight)}
      type="button"
      className="w-full cursor-pointer"
      aria-label="Alterar tema"
    >
      <div className="flex items-center justify-between gap-3 p-3 rounded-default bg-background-400">
        <SunIcon />

        <div className="relative h-3 flex-1 flex items-center p-0.5 rounded-full overflow-hidden bg-background-300">
          <div
            className={clsx(
              "w-full translate-0 transition-transform duration-500",
              {
                "translate-x-[calc(100%-8px)]": !isLight,
              },
            )}
          >
            <span className="block size-2 rounded-full bg-background-400"></span>
          </div>
        </div>

        <MoonIcon />
      </div>
    </button>
  );
};

export default ToggleTheme;
