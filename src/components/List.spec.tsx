import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import List from './List';

describe('List Component', () => {
  it('renders a list of items correctly', () => {
    const items = [
      { id: 1, item: 'Item 1' },
      { id: 2, item: 'Item 2' },
      { id: 3, item: 'Item 3' },
    ];
    const renderItem = (item: { id: number; item: string }) => <span>{item.item}</span>;
    const { container } = render(
      <List items={items} renderItem={renderItem} className="test-class" />,
    );

    expect(container.querySelectorAll('li')).toHaveLength(items.length);
    items.forEach((item, index) => {
      expect(container.querySelectorAll('li')[index].textContent).toBe(item.item);
    });
  });
});
