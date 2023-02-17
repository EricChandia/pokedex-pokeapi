import { CgChevronRightO, CgChevronLeftO } from 'react-icons/cg';
import { IconContext } from 'react-icons';

export const IconRightButton = () => {
  return (
    <IconContext.Provider value={{ color: 'white', size: '40px', className: 'right-button' }}>
      <CgChevronRightO />
    </IconContext.Provider>
  );
};

export const IconLeftButton = () => {
  return (
    <IconContext.Provider value={{ color: 'white', size: '40px', className: 'left-button' }}>
      <CgChevronLeftO />
    </IconContext.Provider>
  );
};
