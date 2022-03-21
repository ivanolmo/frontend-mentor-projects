import darkIcon from '../assets/icon-moon.svg';
import lightIcon from '../assets/icon-sun.svg';

function Header({ theme, dispatch }) {
  const switchTheme = () => {
    dispatch({ type: 'TOGGLE_THEME', payload: theme });
    // TODO temp work-around to change body color on theme switch
    document.body.style.backgroundColor =
      theme === 'light' ? '#141d2f' : '#f6f8ff';
  };

  return (
    <header>
      <div className='logo'>devfinder</div>
      <div className='mode__changer'>
        <button className='theme__switcher' onClick={switchTheme}>
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          {theme === 'light' ? (
            <img src={darkIcon} alt='' />
          ) : (
            <img src={lightIcon} alt='' />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
