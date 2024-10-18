import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarCart from "./SidebarCart";

function Navbar( { setsearchClick } ) {
  const [cartState, setCartState] = useState(true)

  const [hoverShop, setHoverShop] = useState(false)

  

  const [sidebarMenu, setSidebarMenu] = useState(false)

  return (
    <>
        <SidebarMenu sidebarMenu={sidebarMenu} setSidebarMenu={setSidebarMenu}  />
        <SidebarCart cartState={cartState} setCartState={setCartState}  />
        <div
      id="shopify-section-header"
      className="shopify-section shopify-section--header blur-no" style={{position: 'fixed'}}
    >
      <header
        id="section-header"
        className="Header Header--center Header--initialized"
        data-section-id="header"
        data-section-type="header"
        data-section-settings='{
  "navigationStyle": "inline",
  "hasTransparentHeader": false,
  "isSticky": true
}'
        role="banner"
        
      >
        <div className="Header__Wrapper">
          <div className="Header__FlexItem">
            <h1 className="Header__Logo">
              <a href="/" className="Header__LogoLink">
                <img
                  className="Header__LogoImage Header__LogoImage--primary"
                  src="//www.abovethecloudsstore.com/cdn/shop/files/ATC_logopng_220x.png?v=1649356120"
                  srcset="
                //www.abovethecloudsstore.com/cdn/shop/files/ATC_logopng_220x.png?v=1649356120    1x,
                //www.abovethecloudsstore.com/cdn/shop/files/ATC_logopng_220x@2x.png?v=1649356120 2x
              "
                  width="220"
                  alt="Above The Clouds"
                />
              </a>
            </h1>
          </div>

          <div className="Header__FlexItem Header__FlexItem--fill">
            <button
              className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-desk"
              aria-expanded="false"
              data-action="open-drawer"
              data-drawer-id="sidebar-menu"
              aria-label="Open navigation"
              id="hamburger_menu_here"
              onClick={() => setSidebarMenu(!sidebarMenu)}
            >
              <span className="hidden-tablet-and-up">
                <svg
                  className="Icon Icon--nav"
                  role="presentation"
                  viewBox="0 0 20 14"
                >
                  <path
                    d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="hidden-phone">
                <svg
                  className="Icon Icon--nav-desktop"
                  role="presentation"
                  viewBox="0 0 24 16"
                >
                  <path
                    d="M0 15.985v-2h24v2H0zm0-9h24v2H0v-2zm0-7h24v2H0v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </button>
            <nav
              className="Header__MainNav hidden-pocket hidden-lap"
              aria-label="Main navigation"
            >
              <ul className="HorizontalList HorizontalList--spacingExtraLoose">
                <li className="HorizontalList__Item">
                  <a href="/collections/latest-products" className="Heading u-h6">
                    Latest<span className="Header__LinkSpacer">Latest</span>
                  </a>
                </li>
                <li className="HorizontalList__Item" aria-haspopup="true">
                  <a
                    id="shop__button_here"
                    className="Heading u-h6"
                    onMouseEnter={() => setHoverShop(!hoverShop)}
                    onMouseLeave={() => setHoverShop(!hoverShop)}
                    style={{cursor: 'pointer'}}
                  >
                    Shop<span className="Header__LinkSpacer">Shop</span>
                  </a>
                  <div
                    id="MegaMenu_here_all"
                    onMouseEnter={() => setHoverShop(!hoverShop)}
                    onMouseLeave={() => setHoverShop(!hoverShop)}
                    className="MegaMenu MegaMenu--grid"
                    aria-hidden={!hoverShop}
                  >
                    <div className="MegaMenu__Inner">
                      <div className="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/mens"
                          className="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Clothing
                        </a>
                        <ul className="Linklist">
                          <li className="Linklist__Item">
                            <a
                              href="/collections/mens"
                              className="Link Link--secondary"
                            >
                              View Latest
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/footwear"
                              className="Link Link--secondary"
                            >
                              Footwear
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/tees"
                              className="Link Link--secondary"
                            >
                              T-Shirts
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/shirts-1"
                              className="Link Link--secondary"
                            >
                              Shirts
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/jumpers-1"
                              className="Link Link--secondary"
                            >
                              Jumpers
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/jackets-1"
                              className="Link Link--secondary"
                            >
                              Jackets
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/shorts-1"
                              className="Link Link--secondary"
                            >
                              Shorts
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/pants-2"
                              className="Link Link--secondary"
                            >
                              Pants
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/footwear"
                          className="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Footwear
                        </a>
                        <ul className="Linklist">
                          <li className="Linklist__Item">
                            <a
                              href="/collections/footwear"
                              className="Link Link--secondary"
                            >
                              View All
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/sneakers"
                              className="Link Link--secondary"
                            >
                              Sneakers
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/dress-shoes"
                              className="Link Link--secondary"
                            >
                              Dress Shoes
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/sandals-slides"
                              className="Link Link--secondary"
                            >
                              Slides &amp; Sandals
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/boots"
                              className="Link Link--secondary"
                            >
                              Boots
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/mocs"
                              className="Link Link--secondary"
                            >
                              Mocs &amp; Mules
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/shoe-care"
                              className="Link Link--secondary"
                            >
                              Shoe Care
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/socks"
                              className="Link Link--secondary"
                            >
                              Socks
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/accessories"
                          className="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Accessories
                        </a>
                        <ul className="Linklist">
                          <li className="Linklist__Item">
                            <a
                              href="/collections/accessories"
                              className="Link Link--secondary"
                            >
                              View All
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/jewellery"
                              className="Link Link--secondary"
                            >
                              Jewellery
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/eyewear-1"
                              className="Link Link--secondary"
                            >
                              Eyewear
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/bags-1"
                              className="Link Link--secondary"
                            >
                              Bags
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/wallets"
                              className="Link Link--secondary"
                            >
                              Wallets &amp; Key Chains
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/headwear"
                              className="Link Link--secondary"
                            >
                              Headwear
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/socks"
                              className="Link Link--secondary"
                            >
                              Socks
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/products/above-the-clouds-gift-card"
                              className="Link Link--secondary"
                            >
                              Gift Cards
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/lifestyle"
                          className="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Lifestyle
                        </a>
                        <ul className="Linklist">
                          <li className="Linklist__Item">
                            <a
                              href="/collections/lifestyle"
                              className="Link Link--secondary"
                            >
                              View All
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/face-body"
                              className="Link Link--secondary"
                            >
                              Face &amp; Body
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/fragrances"
                              className="Link Link--secondary"
                            >
                              Fragrances
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/ceramics"
                              className="Link Link--secondary"
                            >
                              Ceramics
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/glassware"
                              className="Link Link--secondary"
                            >
                              Drinkware
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/home-decor"
                              className="Link Link--secondary"
                            >
                              Home Decor
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/candles"
                              className="Link Link--secondary"
                            >
                              Candles
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/publications"
                              className="Link Link--secondary"
                            >
                              Publications
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/latest-products"
                          className="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Style
                        </a>
                        <ul className="Linklist">
                          <li className="Linklist__Item">
                            <a
                              href="/collections/european"
                              className="Link Link--secondary"
                            >
                              European
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/japanese"
                              className="Link Link--secondary"
                            >
                              Japanese
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/outdoors"
                              className="Link Link--secondary"
                            >
                              Outdoors
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/smart-formal"
                              className="Link Link--secondary"
                            >
                              Smart &amp; Formal
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/skatewear"
                              className="Link Link--secondary"
                            >
                              Skate
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/denim"
                              className="Link Link--secondary"
                            >
                              Denim
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/collaborations"
                              className="Link Link--secondary"
                            >
                              Collaborations
                            </a>
                          </li>
                          <li className="Linklist__Item">
                            <a
                              href="/collections/footwear"
                              className="Link Link--secondary"
                            >
                              Footwear
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                {/*
            <li className="HorizontalList__Item" aria-haspopup="true">
              <a href="/collections/sale" className="Heading u-h6"
                >Sale<span className="Header__LinkSpacer">Sale</span></a
              >
              <div className="MegaMenu" aria-hidden="true">
                <div className="MegaMenu__Inner">
                  <div className="MegaMenu__Item MegaMenu__Item--fit">
                    <a
                      href="/collections/sale"
                      className="MegaMenu__Title Heading Text--subdued u-h7"
                      >Shop All</a
                    >
                    <ul className="Linklist">
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-adidas-originals"
                          className="Link Link--secondary"
                          >adidas Originals</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-asics-sportstyle"
                          className="Link Link--secondary"
                          >Asics</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-casablanca"
                          className="Link Link--secondary"
                          >Casablanca</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-c-p-company"
                          className="Link Link--secondary"
                          >C.P. Company</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-kenzo-paris"
                          className="Link Link--secondary"
                          >KENZO PARIS</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-new-balance"
                          className="Link Link--secondary"
                          >New Balance</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-nike"
                          className="Link Link--secondary"
                          >Nike</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-polo-ralph-lauren"
                          className="Link Link--secondary"
                          >Polo Ralph Lauren</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div className="MegaMenu__Item MegaMenu__Item--fit">
                    <a
                      href="#"
                      className="MegaMenu__Title Heading Text--subdued u-h7"
                      >Categories</a
                    >
                    <ul className="Linklist">
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-accessories"
                          className="Link Link--secondary"
                          >Accessories</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-footwear"
                          className="Link Link--secondary"
                          >Footwear</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-jumpers"
                          className="Link Link--secondary"
                          >Jumpers</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-outerwear"
                          className="Link Link--secondary"
                          >Outerwear</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-pants"
                          className="Link Link--secondary"
                          >Pants</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-shirts"
                          className="Link Link--secondary"
                          >Shirts</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-shorts"
                          className="Link Link--secondary"
                          >Shorts</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="/collections/sale-t-shirts"
                          className="Link Link--secondary"
                          >T-Shirts</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div className="MegaMenu__Item MegaMenu__Item--fit">
                    <a
                      href="/collections/sale-footwear"
                      className="MegaMenu__Title Heading Text--subdued u-h7"
                      >Men's Footwear</a
                    >
                    <ul className="Linklist">
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+7&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Men's US 7</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+8&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Men's US 8</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+9&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Men's US 9</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.availability=1&amp;filter.v.option.size=US+9.5"
                          className="Link Link--secondary"
                          >Men's US 9.5</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+10&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Men's US 10</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.availability=1&amp;filter.v.option.size=US+10.5"
                          className="Link Link--secondary"
                          >Men's US 10.5</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+11&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Men's US 11</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+12&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Men's US 12</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div className="MegaMenu__Item MegaMenu__Item--fit">
                    <a
                      href="/collections/sale-footwear"
                      className="MegaMenu__Title Heading Text--subdued u-h7"
                      >Women's Footwear</a
                    >
                    <ul className="Linklist">
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+5&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Women's US 5</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+6&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Women's US 6</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+6.5&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Women's US 6.5</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+7&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Women's US 7</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+7.5&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Women's US 7.5</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+8&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Women's US 8</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+8.5&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Women's US 8.5</a
                        >
                      </li>
                      <li className="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+9&amp;filter.v.availability=1"
                          className="Link Link--secondary"
                          >Women's US 9</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            --> */}
              </ul>
            </nav>
          </div>

          <div className="Header__FlexItem Header__FlexItem--fill">
            <nav className="Header__SecondaryNav">
              <ul className="HorizontalList HorizontalList--spacingLoose hidden-pocket hidden-lap">
                <li className="HorizontalList__Item">
                  <a
                    href="/account/login"
                    className="Heading Link Link--primary Text--subdued u-h8"
                  >
                    Account
                  </a>
                </li>
                <li className="HorizontalList__Item">
                  <a
                    className="Heading Link Link--primary Text--subdued u-h8"
                    data-action="open-modal"
                    aria-controls="Search"
                    onClick={() => setsearchClick(false)}
                    style={{cursor: 'pointer'}}
                  >
                    Search
                  </a>
                </li>

                <li className="HorizontalList__Item">
                  <a
                    href="/pages/wishlist"
                    className="Heading Link Link--primary Text--subdued u-h8"
                  >
                    Wishlist
                  </a>
                </li>

                <li className="HorizontalList__Item" id="cart_but_here" onClick={() => setCartState(!cartState)}>
                  <a
                    className="Heading u-h6"
                    data-action="open-drawer"
                    data-drawer-id="sidebar-cart"
                    aria-label="Open cart"
                    style={{cursor: 'pointer'}}
                  >
                    Cart (<span className="Header__CartCount">0</span>)
                  </a>
                </li>
              </ul>
            </nav>
            <div className="Header__Icon--container hidden-desk">
              <a
                href="/search"
                className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable"
                data-action="open-modal"
                aria-controls="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.475"
                  height="21.475"
                  viewBox="0 0 21.475 21.475"
                >
                  <g
                    id="Group_264"
                    data-name="Group 264"
                    transform="translate(0.5 0.5)"
                  >
                    <line
                      id="Line_422"
                      data-name="Line 422"
                      x2="7.931"
                      y2="7.931"
                      transform="translate(12.69 12.69)"
                      fill="none"
                      stroke="#282828"
                      stroke-miterlimit="10"
                      stroke-width="1.25"
                    ></line>
                    <circle
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="7.402"
                      cy="7.402"
                      r="7.402"
                      fill="none"
                      stroke="#282828"
                      stroke-miterlimit="10"
                      stroke-width="1.25"
                    ></circle>
                  </g>
                </svg>
              </a>
              <a
                className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable"
                data-action="open-drawer"
                data-drawer-id="sidebar-cart"
                aria-expanded="false"
                aria-label="Open cart"
                onClick={() => setCartState(!cartState)}
              >
                <span className="hidden-tablet-and-up">
                  <svg
                    className="Icon Icon--cart"
                    role="presentation"
                    viewBox="0 0 17 20"
                  >
                    <path
                      d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="hidden-phone">
                  <svg
                    className="Icon Icon--cart-desktop"
                    role="presentation"
                    viewBox="0 0 19 23"
                  >
                    <path
                      d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="Header__CartDot"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="filter-blur"></div>
      </header>
        </div>
    </>
  );
}

export default Navbar;
