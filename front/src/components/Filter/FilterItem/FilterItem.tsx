import { Collapse } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import clsx from 'clsx';
import Button from '../../Button';
import styles from './FilterItem.module.css';

interface FilterItemProps {
  name: string;
  children: JSX.Element | JSX.Element[] | string;
}

const FilterItem: FunctionComponent<FilterItemProps> = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.filter}>
      <div className={styles.nameFilter}>
        <div id={name} className={styles.name}>
          {name}
        </div>
        <Button
          className={clsx(styles.button, isOpen ? '' : styles.invert)}
          variant="text"
          iconAfter="../icons/iconChevron.svg"
          onClick={() => setIsOpen(s => !s)}
        />
      </div>
      <Collapse in={isOpen}>
        <div className={styles.content}>{children}</div>
      </Collapse>
    </div>
  );
};

export default FilterItem;
