import { FC } from 'react';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import styles from './FlightArrow.module.scss';
import styled from '@emotion/styled';
import { Transfer } from '../../../types/ticket';
import { formatDuration } from '../../../utils/formatting';

interface FlightArrowProps {
  transitions?: Transfer[];
}

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'var(--black-222222)',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'var(--black-222222)',
    borderRadius: 'var(--br-sm)',
    border: '1px solid var(--black-222222)',
    padding: 'var(--padding-5xs) var(--padding-4xs)',
  },
}));

const FlightArrow: FC<FlightArrowProps> = ({ transitions }) => {
  return (
    <div className={styles.line}>
      <img className={styles.arrowStart} src="../icons/vector-271.svg" alt="" />
      <hr className={styles.hr} />
      <img className={styles.arrowEnd} src="../icons/vector-272.svg" alt="" />

      {transitions
        ? transitions.map((transaction, i) => {
            const position = (100 * (i + 1)) / (transitions.length + 1);
            const text = `Пересадка\n${transaction.airport.city || transaction.airport.name} (${
              transaction.airport.code
            })\n${formatDuration(Math.floor(transaction.duration))}`;
            return (
              <BootstrapTooltip
                className={styles.tooltip}
                key={transaction.airport.code + i}
                title={text}
                placement="top"
                arrow
              >
                <svg
                  className={styles.circle}
                  style={{ left: `${position}%` }}
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="3" stroke="#D5D7E2" fill="#FFFFFF" strokeWidth="2" />
                </svg>
              </BootstrapTooltip>
            );
          })
        : null}
    </div>
  );
};

export default FlightArrow;
