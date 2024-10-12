import React from "react";

function SidebarCart({ cartState, setCartState }) {
  return (
    <div
      id="sidebar-cart"
      class="Drawer Drawer--fromRight"
      aria-hidden={cartState}
      data-section-id="cart"
      data-section-type="cart"
      data-section-settings='{
  "type": "drawer",
  "itemCount": 0,
  "drawer": true,
  "hasShippingEstimator": false
}'
      
      style={{maxHeight: '100%', backdropFilter: 'blur(40px) !important', background: '#fff !important'}}
    >
      <div class="Drawer__Header Drawer__Header--bordered Drawer__Container">
        <span class="Drawer__Title Heading u-h4">
          [<span class="Header__CartCount">0</span>] items
        </span>

        <button
          id="Drawer__Close_Icon-Wrapper--clickable"
          class="Drawer__Close Icon-Wrapper--clickable"
          data-action="close-drawer"
          data-drawer-id="sidebar-cart"
          aria-label="Close cart"
          onClick={() => setCartState(!cartState)}
        >
          close
        </button>
      </div>

      <form
        class="Cart Drawer__Content"
        action="/"
        method="POST"
        novalidate=""
      >
        <div class="Drawer__Main" data-scrollable="">
          <p class="Cart__Empty Heading u-h5">Your cart is empty</p>
        </div>
      </form>
    </div>
  );
}

export default SidebarCart;
