import { ComponentPropsWithoutRef } from 'react';
import { cn } from '../lib/utils';

export interface ListProps<T> extends ComponentPropsWithoutRef<'ul'> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T extends object>({ items, renderItem, className }: ListProps<T>) => {
  return (
    <ul className={cn('grid gap-y-8 gap-x-6', className)}>
      {items.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default List;
