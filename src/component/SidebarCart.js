import React from "react";

function SidebarCart( { cartState, setCartState } ) {
  return (
    <div
      id="sidebar-cart"
      className="Drawer Drawer--fromRight"
      aria-hidden={cartState}
      data-section-id="cart"
      data-section-type="cart"
      data-section-settings='{
  "type": "drawer",
  "itemCount": 0,
  "drawer": true,
  "hasShippingEstimator": false
}'
      tabindex="-1"
      style={{maxHeight: '100%', backdropFilter: 'blur(40px) !important', background: '#fff !important'}}
    >
      <div className="Drawer__Header Drawer__Header--bordered Drawer__Container">
        <span className="Drawer__Title Heading u-h4">
          [<span className="Header__CartCount">1</span>] items
        </span>

        <button
          id="Drawer__Close_Icon-Wrapper--clickable"
          className="Drawer__Close Icon-Wrapper--clickable"
          data-action="close-drawer"
          data-drawer-id="sidebar-cart"
          aria-label="Close cart"
          onClick={() => setCartState(!cartState)}
        >
          close
        </button>
      </div>

      <form
        className="Cart Drawer__Content"
        action="/cart"
        method="POST"
        novalidate=""
      >
        <div className="Drawer__Main" data-scrollable="">
          <div className="Drawer__Container">
            <input
              type="hidden"
              name="attributes[collection_mobile_items_per_row]"
              value=""
            />
            <input
              type="hidden"
              name="attributes[collection_desktop_items_per_row]"
              value=""
            />

            <div className="Cart__ItemList">
              <div className="CartItemWrapper">
                <div className="CartItem">
                  <div className="CartItem__ImageWrapper AspectRatio">
                    <div className="AspectRatio" style={{aspectRatio: 1}}>
                      <img
                        className="CartItem__Image"
                        src="//www.abovethecloudsstore.com/cdn/shop/files/NIKE_CORTEZ_SE_MTLLC-COOL-GREY-BLK_7_240x.jpg?v=1728900573"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="CartItem__Info">
                    <div className="CartItem__Info_container">
                      <h2 className="CartItem__Title Heading">
                        <a href="/products/cortez-se-metallic-cool-grey-black-gum-dark-brown?variant=48711921893569">
                          Cortez SE Metallic Cool Grey | Black | Gum Dark Brown
                        </a>
                      </h2>

                      <div className="CartItem__Meta Heading Text--subdued">
                        <p className="CartItem__Variant">US 5.5</p>
                        <div className="CartItem__PriceList">
                          <span
                            className="CartItem__Price Price"
                            data-money-convertible=""
                          >
                            $150
                          </span>
                        </div>
                      </div>
                      <div
                        className="CartItem__Actions Heading Text--subdued"
                        style={{textAlign: 'center'}}
                      >
                        <div className="CartItem__QuantitySelector">
                          <div className="QuantitySelector">
                            <a
                              className="QuantitySelector__Button Link Link--primary"
                              title="Set quantity to 0"
                              href="/cart/change?quantity=0&amp;id=48711921893569:80b9aa6b9aeae37c6e4a4c58a6ef7f76"
                              data-quantity="0"
                              data-line-id="48711921893569:80b9aa6b9aeae37c6e4a4c58a6ef7f76"
                              data-action="update-item-quantity"
                            >
                              <svg
                                className="Icon Icon--minus"
                                role="presentation"
                                viewBox="0 0 16 2"
                              >
                                <path
                                  d="M1,1 L15,1"
                                  stroke="currentColor"
                                  fill="none"
                                  fill-rule="evenodd"
                                  stroke-linecap="square"
                                ></path>
                              </svg>
                            </a>

                            <input
                              type="text"
                              name="updates[]"
                              id="updates_48711921893569:80b9aa6b9aeae37c6e4a4c58a6ef7f76"
                              className="QuantitySelector__CurrentQuantity"
                              pattern="[0-9]*"
                              data-line-id="48711921893569:80b9aa6b9aeae37c6e4a4c58a6ef7f76"
                              value="1"
                            />
                            <a
                              className="QuantitySelector__Button Link Link--primary"
                              title="Set quantity to 2"
                              href="/cart/change?quantity=2&amp;id=48711921893569:80b9aa6b9aeae37c6e4a4c58a6ef7f76"
                              data-quantity="2"
                              data-line-id="48711921893569:80b9aa6b9aeae37c6e4a4c58a6ef7f76"
                              data-action="update-item-quantity"
                            >
                              <svg
                                className="Icon Icon--plus"
                                role="presentation"
                                viewBox="0 0 16 16"
                              >
                                <g
                                  stroke="currentColor"
                                  fill="none"
                                  fill-rule="evenodd"
                                  stroke-linecap="square"
                                >
                                  <path d="M8,1 L8,15"></path>
                                  <path d="M1,8 L15,8"></path>
                                </g>
                              </svg>
                            </a>
                          </div>
                        </div>

                        <a
                          href="/cart/change?quantity=0&amp;id=48711921893569:80b9aa6b9aeae37c6e4a4c58a6ef7f76"
                          className="CartItem__Remove Link Link--underline Link--underlineShort"
                          data-quantity="0"
                          data-line-id="48711921893569:80b9aa6b9aeae37c6e4a4c58a6ef7f76"
                          data-action="remove-item"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Drawer__Footer" data-drawer-animated-bottom="">
          <button
            type="button"
            className="Cart__NoteButton"
            data-action="toggle-cart-note"
          >
            Add Order Note
          </button>
          <span className="Cart__Taxes Text--subdued">
            Shipping &amp; taxes calculated at checkout
          </span>
          <button
            type="submit"
            name="checkout"
            className="Cart__Checkout Button Button--primary Button--full"
          >
            <span>Checkout</span>
            <span className="Button__SeparatorDot"></span>
            <span data-money-convertible="">$150</span>
          </button>
          <div className="Cart__OffscreenNoteContainer" aria-hidden="true">
            <div className="cart-action-cont">
              <div>
                <span className="Cart__NoteButton">Add Order Note</span>
              </div>
              <div className="close-cart-note">
                <span data-action="toggle-cart-note">
                  <svg
                    className="Icon Icon--plus"
                    role="presentation"
                    viewBox="0 0 16 14"
                  >
                    <path
                      d="M15 0L1 14m14 0L1 0"
                      stroke="currentColor"
                      fill="none"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="Form__Item">
              <textarea
                className="Cart__Note Form__Textarea"
                name="note"
                id="cart-note"
                rows="3"
                placeholder="How can we help you?"
                data-scrollable=""
              ></textarea>
            </div>

            <button
              type="button"
              className="Button Button--primary Button--full"
              data-action="toggle-cart-note"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SidebarCart;
