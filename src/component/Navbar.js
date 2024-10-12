import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarCart from "./SidebarCart";

function Navbar() {
  const [cartState, setCartState] = useState(true)

  const [hoverShop, setHoverShop] = useState(false)

  const [sidebarMenu, setSidebarMenu] = useState(false)

  return (
    <>
        <SidebarMenu sidebarMenu={sidebarMenu} setSidebarMenu={setSidebarMenu}  />
        <SidebarCart cartState={cartState} setCartState={setCartState}  />
        <div
      id="shopify-section-header"
      class="shopify-section shopify-section--header blur-no" style={{position: 'fixed'}}
    >
      <header
        id="section-header"
        class="Header Header--center Header--initialized"
        data-section-id="header"
        data-section-type="header"
        data-section-settings='{
  "navigationStyle": "inline",
  "hasTransparentHeader": false,
  "isSticky": true
}'
        role="banner"
        
      >
        <div class="Header__Wrapper">
          <div class="Header__FlexItem">
            <h1 class="Header__Logo">
              <a href="/" class="Header__LogoLink">
                <img
                  class="Header__LogoImage Header__LogoImage--primary"
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

          <div class="Header__FlexItem Header__FlexItem--fill">
            <button
              class="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-desk"
              aria-expanded="false"
              data-action="open-drawer"
              data-drawer-id="sidebar-menu"
              aria-label="Open navigation"
              id="hamburger_menu_here"
              onClick={() => setSidebarMenu(!sidebarMenu)}
            >
              <span class="hidden-tablet-and-up">
                <svg
                  class="Icon Icon--nav"
                  role="presentation"
                  viewBox="0 0 20 14"
                >
                  <path
                    d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="hidden-phone">
                <svg
                  class="Icon Icon--nav-desktop"
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
              class="Header__MainNav hidden-pocket hidden-lap"
              aria-label="Main navigation"
            >
              <ul class="HorizontalList HorizontalList--spacingExtraLoose">
                <li class="HorizontalList__Item">
                  <a href="/collections/latest-products" class="Heading u-h6">
                    Latest<span class="Header__LinkSpacer">Latest</span>
                  </a>
                </li>
                <li class="HorizontalList__Item" aria-haspopup="true">
                  <a
                    id="shop__button_here"
                    class="Heading u-h6"
                    onMouseEnter={() => setHoverShop(!hoverShop)}
                    onMouseLeave={() => setHoverShop(!hoverShop)}
                    style={{cursor: 'pointer'}}
                  >
                    Shop<span class="Header__LinkSpacer">Shop</span>
                  </a>
                  <div
                    id="MegaMenu_here_all"
                    onMouseEnter={() => setHoverShop(!hoverShop)}
                    onMouseLeave={() => setHoverShop(!hoverShop)}
                    class="MegaMenu MegaMenu--grid"
                    aria-hidden={!hoverShop}
                    style={{background: 'white !important'}}
                  >
                    <div class="MegaMenu__Inner" id="MegaMenu_here_all">
                      <div class="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/mens"
                          class="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Clothing
                        </a>
                        <ul class="Linklist">
                          <li class="Linklist__Item">
                            <a
                              href="/collections/mens"
                              class="Link Link--secondary"
                            >
                              View Latest
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/footwear"
                              class="Link Link--secondary"
                            >
                              Footwear
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/tees"
                              class="Link Link--secondary"
                            >
                              T-Shirts
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/shirts-1"
                              class="Link Link--secondary"
                            >
                              Shirts
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/jumpers-1"
                              class="Link Link--secondary"
                            >
                              Jumpers
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/jackets-1"
                              class="Link Link--secondary"
                            >
                              Jackets
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/shorts-1"
                              class="Link Link--secondary"
                            >
                              Shorts
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/pants-2"
                              class="Link Link--secondary"
                            >
                              Pants
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/footwear"
                          class="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Footwear
                        </a>
                        <ul class="Linklist">
                          <li class="Linklist__Item">
                            <a
                              href="/collections/footwear"
                              class="Link Link--secondary"
                            >
                              View All
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/sneakers"
                              class="Link Link--secondary"
                            >
                              Sneakers
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/dress-shoes"
                              class="Link Link--secondary"
                            >
                              Dress Shoes
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/sandals-slides"
                              class="Link Link--secondary"
                            >
                              Slides &amp; Sandals
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/boots"
                              class="Link Link--secondary"
                            >
                              Boots
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/mocs"
                              class="Link Link--secondary"
                            >
                              Mocs &amp; Mules
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/shoe-care"
                              class="Link Link--secondary"
                            >
                              Shoe Care
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/socks"
                              class="Link Link--secondary"
                            >
                              Socks
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/accessories"
                          class="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Accessories
                        </a>
                        <ul class="Linklist">
                          <li class="Linklist__Item">
                            <a
                              href="/collections/accessories"
                              class="Link Link--secondary"
                            >
                              View All
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/jewellery"
                              class="Link Link--secondary"
                            >
                              Jewellery
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/eyewear-1"
                              class="Link Link--secondary"
                            >
                              Eyewear
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/bags-1"
                              class="Link Link--secondary"
                            >
                              Bags
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/wallets"
                              class="Link Link--secondary"
                            >
                              Wallets &amp; Key Chains
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/headwear"
                              class="Link Link--secondary"
                            >
                              Headwear
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/socks"
                              class="Link Link--secondary"
                            >
                              Socks
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/products/above-the-clouds-gift-card"
                              class="Link Link--secondary"
                            >
                              Gift Cards
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/lifestyle"
                          class="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Lifestyle
                        </a>
                        <ul class="Linklist">
                          <li class="Linklist__Item">
                            <a
                              href="/collections/lifestyle"
                              class="Link Link--secondary"
                            >
                              View All
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/face-body"
                              class="Link Link--secondary"
                            >
                              Face &amp; Body
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/fragrances"
                              class="Link Link--secondary"
                            >
                              Fragrances
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/ceramics"
                              class="Link Link--secondary"
                            >
                              Ceramics
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/glassware"
                              class="Link Link--secondary"
                            >
                              Drinkware
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/home-decor"
                              class="Link Link--secondary"
                            >
                              Home Decor
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/candles"
                              class="Link Link--secondary"
                            >
                              Candles
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/publications"
                              class="Link Link--secondary"
                            >
                              Publications
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="MegaMenu__Item MegaMenu__Item--fit">
                        <a
                          href="/collections/latest-products"
                          class="MegaMenu__Title Heading Text--subdued u-h7"
                        >
                          Style
                        </a>
                        <ul class="Linklist">
                          <li class="Linklist__Item">
                            <a
                              href="/collections/european"
                              class="Link Link--secondary"
                            >
                              European
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/japanese"
                              class="Link Link--secondary"
                            >
                              Japanese
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/outdoors"
                              class="Link Link--secondary"
                            >
                              Outdoors
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/smart-formal"
                              class="Link Link--secondary"
                            >
                              Smart &amp; Formal
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/skatewear"
                              class="Link Link--secondary"
                            >
                              Skate
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/denim"
                              class="Link Link--secondary"
                            >
                              Denim
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/collaborations"
                              class="Link Link--secondary"
                            >
                              Collaborations
                            </a>
                          </li>
                          <li class="Linklist__Item">
                            <a
                              href="/collections/footwear"
                              class="Link Link--secondary"
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
            <li class="HorizontalList__Item" aria-haspopup="true">
              <a href="/collections/sale" class="Heading u-h6"
                >Sale<span class="Header__LinkSpacer">Sale</span></a
              >
              <div class="MegaMenu" aria-hidden="true">
                <div class="MegaMenu__Inner">
                  <div class="MegaMenu__Item MegaMenu__Item--fit">
                    <a
                      href="/collections/sale"
                      class="MegaMenu__Title Heading Text--subdued u-h7"
                      >Shop All</a
                    >
                    <ul class="Linklist">
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-adidas-originals"
                          class="Link Link--secondary"
                          >adidas Originals</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-asics-sportstyle"
                          class="Link Link--secondary"
                          >Asics</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-casablanca"
                          class="Link Link--secondary"
                          >Casablanca</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-c-p-company"
                          class="Link Link--secondary"
                          >C.P. Company</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-kenzo-paris"
                          class="Link Link--secondary"
                          >KENZO PARIS</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-new-balance"
                          class="Link Link--secondary"
                          >New Balance</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-nike"
                          class="Link Link--secondary"
                          >Nike</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-polo-ralph-lauren"
                          class="Link Link--secondary"
                          >Polo Ralph Lauren</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="MegaMenu__Item MegaMenu__Item--fit">
                    <a
                      href="#"
                      class="MegaMenu__Title Heading Text--subdued u-h7"
                      >Categories</a
                    >
                    <ul class="Linklist">
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-accessories"
                          class="Link Link--secondary"
                          >Accessories</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-footwear"
                          class="Link Link--secondary"
                          >Footwear</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-jumpers"
                          class="Link Link--secondary"
                          >Jumpers</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-outerwear"
                          class="Link Link--secondary"
                          >Outerwear</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-pants"
                          class="Link Link--secondary"
                          >Pants</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-shirts"
                          class="Link Link--secondary"
                          >Shirts</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-shorts"
                          class="Link Link--secondary"
                          >Shorts</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="/collections/sale-t-shirts"
                          class="Link Link--secondary"
                          >T-Shirts</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="MegaMenu__Item MegaMenu__Item--fit">
                    <a
                      href="/collections/sale-footwear"
                      class="MegaMenu__Title Heading Text--subdued u-h7"
                      >Men's Footwear</a
                    >
                    <ul class="Linklist">
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+7&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Men's US 7</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+8&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Men's US 8</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+9&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Men's US 9</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.availability=1&amp;filter.v.option.size=US+9.5"
                          class="Link Link--secondary"
                          >Men's US 9.5</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+10&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Men's US 10</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.availability=1&amp;filter.v.option.size=US+10.5"
                          class="Link Link--secondary"
                          >Men's US 10.5</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+11&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Men's US 11</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=US+12&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Men's US 12</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="MegaMenu__Item MegaMenu__Item--fit">
                    <a
                      href="/collections/sale-footwear"
                      class="MegaMenu__Title Heading Text--subdued u-h7"
                      >Women's Footwear</a
                    >
                    <ul class="Linklist">
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+5&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Women's US 5</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+6&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Women's US 6</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+6.5&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Women's US 6.5</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+7&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Women's US 7</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+7.5&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Women's US 7.5</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+8&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Women's US 8</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+8.5&amp;filter.v.availability=1"
                          class="Link Link--secondary"
                          >Women's US 8.5</a
                        >
                      </li>
                      <li class="Linklist__Item">
                        <a
                          href="https://www.abovethecloudsstore.com/collections/sale-footwear?filter.v.option.size=Womens+US+9&amp;filter.v.availability=1"
                          class="Link Link--secondary"
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

          <div class="Header__FlexItem Header__FlexItem--fill">
            <nav class="Header__SecondaryNav">
              <ul class="HorizontalList HorizontalList--spacingLoose hidden-pocket hidden-lap">
                <li class="HorizontalList__Item">
                  <a
                    href="/account/login"
                    class="Heading Link Link--primary Text--subdued u-h8"
                  >
                    Account
                  </a>
                </li>
                <li class="HorizontalList__Item">
                  <a
                    href="/search"
                    class="Heading Link Link--primary Text--subdued u-h8"
                    data-action="open-modal"
                    aria-controls="Search"
                  >
                    Search
                  </a>
                </li>

                <li class="HorizontalList__Item">
                  <a
                    href="/pages/wishlist"
                    class="Heading Link Link--primary Text--subdued u-h8"
                  >
                    Wishlist
                  </a>
                </li>

                <li class="HorizontalList__Item" id="cart_but_here" onClick={() => setCartState(!cartState)}>
                  <a
                    class="Heading u-h6"
                    data-action="open-drawer"
                    data-drawer-id="sidebar-cart"
                    aria-label="Open cart"
                    style={{cursor: 'pointer'}}
                  >
                    Cart (<span class="Header__CartCount">0</span>)
                  </a>
                </li>
              </ul>
            </nav>
            <div class="Header__Icon--container hidden-desk">
              <a
                href="/search"
                class="Header__Icon Icon-Wrapper Icon-Wrapper--clickable"
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
                class="Header__Icon Icon-Wrapper Icon-Wrapper--clickable"
                data-action="open-drawer"
                data-drawer-id="sidebar-cart"
                aria-expanded="false"
                aria-label="Open cart"
                onClick={() => setCartState(!cartState)}
              >
                <span class="hidden-tablet-and-up">
                  <svg
                    class="Icon Icon--cart"
                    role="presentation"
                    viewBox="0 0 17 20"
                  >
                    <path
                      d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span class="hidden-phone">
                  <svg
                    class="Icon Icon--cart-desktop"
                    role="presentation"
                    viewBox="0 0 19 23"
                  >
                    <path
                      d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span class="Header__CartDot"></span>
              </a>
            </div>
          </div>
        </div>
        <div class="filter-blur"></div>
      </header>
        </div>
    </>
  );
}

export default Navbar;
