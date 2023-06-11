import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const ThemeChanger = ({ setCurrentTheme }) => {
  const themeValues = ['Themes', 'Light', 'Dracula', 'Bumblebee', 'Dark', 'Cupcake'];
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <select
        className="select select-bordered select-sm  max-w-xs"
        data-choose-theme
        onChange={(e) => {
          console.log(e.target.value);
          setCurrentTheme(e.target.value);
        }}>
        {themeValues.map((value, idx) => {
          const isFirstItem = idx === 0;

          return (
            <option
              className="text-primary"
              key={value?.toLowerCase()}
              value={isFirstItem ? 'default' : value?.toLowerCase()}>
              {value}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default ThemeChanger;
