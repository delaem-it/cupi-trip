import { Price } from '../types/ticket';

const formatDurationFromNumber = (durationInMinutes: number) => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = Math.round(durationInMinutes - +hours * 60);
  return `${hours} ч ${minutes} мин`;
};

const formatDurationFromDuration = (duration: Duration) => {
  const days = duration.days ? `${duration.days} д` : '';
  const hours = duration.hours ? `${duration.hours} ч` : '';
  const minutes = duration.minutes ? `${duration.minutes} мин` : '';
  const result = `${days} ${hours} ${minutes}`;
  return result.trim();
};

export const formatDuration = (duration?: number | Duration) => {
  if (!duration && duration !== 0) return;
  if (typeof duration === 'number') return formatDurationFromNumber(duration);
  return formatDurationFromDuration(duration);
};

export const formatPrice = (price?: Price | string | number) => {
  if (!price) return;
  if (typeof price === 'string' && price.includes('₽')) return price;
  const priceSymbol = (typeof price === 'object' && price.symbol) || '₽';
  const priceValue = (typeof price === 'object' && price.value) || price;
  const match = priceValue.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/gm);
  return match?.join(' ') + ` ${priceSymbol}`;
};

export function getRightEndingTransfers(total: number) {
  if (!total) {
    return `${total} пересадок`;
  } else if (total % 100 > 4 && total % 100 < 21) {
    return `${total} пересадок`;
  } else if (total % 10 === 1) {
    return `${total} пересадка`;
  } else if (total % 10 < 5 && total % 10 > 0) {
    return `${total} пересадки`;
  } else {
    return `${total} пересадок`;
  }
}
