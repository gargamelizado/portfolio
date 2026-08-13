import { beforeEach, describe, expect, it } from 'vitest';
import { useCartStore } from './cartStore';

describe('cartStore', () => {
  beforeEach(() => {
    useCartStore.setState({ cartItems: [] });
  });

  it('adds items to the cart', () => {
    useCartStore.getState().addCartItem({ cartItemId: 'abc-1', productId: 'cone-trufado' });

    expect(useCartStore.getState().cartItems).toHaveLength(1);
    expect(useCartStore.getState().cartItems[0]).toMatchObject({ productId: 'cone-trufado' });
  });

  it('removes and clears items from the cart', () => {
    useCartStore.getState().addCartItem({ cartItemId: 'abc-1', productId: 'cone-trufado' });
    useCartStore.getState().addCartItem({ cartItemId: 'abc-2', productId: 'empadao' });

    useCartStore.getState().removeCartItem('abc-1');
    expect(useCartStore.getState().cartItems).toHaveLength(1);

    useCartStore.getState().clearCartItems();
    expect(useCartStore.getState().cartItems).toHaveLength(0);
  });
});
