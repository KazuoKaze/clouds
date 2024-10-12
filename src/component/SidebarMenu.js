import React from "react";




function SidebarMenu({ sidebarMenu, setSidebarMenu }) {
  return (
    <div id="shopify-section-sidebar-menu" class="shopify-section">
      <section
        id="sidebar-menu"
        class="SidebarMenu Drawer Drawer--small Drawer--fromLeft"
        aria-hidden={!sidebarMenu}
        data-section-id="sidebar-menu"
        data-section-type="sidebar-menu"
        style={{ maxHeight: "606px" }}
      >
        <header class="Drawer__Header" data-drawer-animated-left="">
          <button
            class="Drawer__Close Icon-Wrapper--clickable"
            data-action="close-drawer"
            data-drawer-id="sidebar-menu"
            aria-label="Close navigation"
            id="close_icon_here"
            onClick={() => setSidebarMenu(!sidebarMenu)}
          >
            <svg
              class="Icon Icon--close"
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
          </button>
        </header>

        <div class="Drawer__Content">
          <div
            class="Drawer__Main"
            data-drawer-animated-left=""
            data-scrollable=""
          >
            <div class="Drawer__Container">
              <nav
                class="SidebarMenu__Nav SidebarMenu__Nav--primary"
                aria-label="Sidebar navigation"
              >
                <div class="Collapsible">
                  <a
                    href="/collections/latest-products"
                    class="Collapsible__Button Heading Link Link--primary u-h6"
                  >
                    LATEST ARRIVALS
                  </a>
                </div>
                <div class="Collapsible">
                  <a
                    href="/collections/footwear"
                    class="Collapsible__Button Heading Link Link--primary u-h6"
                  >
                    FOOTWEAR
                  </a>
                </div>
                <div class="Collapsible">
                  <a
                    href="/pages/brand-list"
                    class="Collapsible__Button Heading Link Link--primary u-h6"
                  >
                    BRANDS
                  </a>
                </div>
                <div class="Collapsible">
                  <button
                    class="Collapsible__Button Heading u-h6"
                    data-action="toggle-collapsible"
                    aria-expanded="false"
                  >
                    MENSWEAR<span class="Collapsible__Plus"></span>
                  </button>

                  <div class="Collapsible__Inner">
                    <div class="Collapsible__Content">
                      <div class="Collapsible">
                        <a
                          href="/collections/mens"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          View Latest
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/footwear-mens"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Footwear
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/tees-men"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          T-Shirts
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/shirts"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Shirts
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/jumpers"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Jumpers
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/jackets"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Jackets
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/shorts"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Shorts
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/pants"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Pants
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/headwear"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Headwear
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Collapsible">
                  <button
                    class="Collapsible__Button Heading u-h6"
                    data-action="toggle-collapsible"
                    aria-expanded="false"
                  >
                    LIFESTYLE<span class="Collapsible__Plus"></span>
                  </button>

                  <div class="Collapsible__Inner">
                    <div class="Collapsible__Content">
                      <div class="Collapsible">
                        <a
                          href="/collections/lifestyle"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          View All
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/face-body"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Face &amp; Body
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/fragrances"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Fragrance
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/ceramics"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Ceramics
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/glassware"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Glassware
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/home-decor"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Home Decor
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/candles"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Candles
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/publications"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Publications
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Collapsible">
                  <button
                    class="Collapsible__Button Heading u-h6"
                    data-action="toggle-collapsible"
                    aria-expanded="false"
                  >
                    ACCESSORIES<span class="Collapsible__Plus"></span>
                  </button>

                  <div class="Collapsible__Inner">
                    <div class="Collapsible__Content">
                      <div class="Collapsible">
                        <a
                          href="/collections/accessories"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          View Latest
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/bags-1"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Bags
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/eyewear-1"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Eyewear
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/headwear"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Headwear
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/jewellery"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Jewellery
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/gift-cards"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Gift Cards
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/wallets"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Wallets
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/socks"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Socks
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Collapsible">
                  <button
                    class="Collapsible__Button Heading u-h6"
                    data-action="toggle-collapsible"
                    aria-expanded="false"
                  >
                    STYLE<span class="Collapsible__Plus"></span>
                  </button>

                  <div class="Collapsible__Inner">
                    <div class="Collapsible__Content">
                      <div class="Collapsible">
                        <a
                          href="/collections/european"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          European
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/japanese"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Japanese
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/outdoors"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Techwear
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/smart-formal"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Smart &amp; Formal
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/skatewear"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Skate
                        </a>
                      </div>
                      <div class="Collapsible">
                        <a
                          href="/collections/collaborations"
                          class="Collapsible__Button Heading Text--subdued Link Link--primary u-h7"
                        >
                          Collaborations
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="Collapsible">
                  <a
                    href="/collections/sale"
                    class="Collapsible__Button Heading Link Link--primary u-h6"
                  >
                    SALE
                  </a>
                </div>
                <div class="Collapsible">
                  <a
                    href="/collections/raffle"
                    class="Collapsible__Button Heading Link Link--primary u-h6"
                  >
                    LAUNCHES
                  </a>
                </div>
                <div class="Collapsible">
                  <a
                    href="/collections/gift-cards"
                    class="Collapsible__Button Heading Link Link--primary u-h6"
                  >
                    GIFT CARDS
                  </a>
                </div>
                <div class="Collapsible">
                  <a
                    href="/pages/contact"
                    class="Collapsible__Button Heading Link Link--primary u-h6"
                  >
                    CONTACT
                  </a>
                </div>
              </nav>
              <nav class="SidebarMenu__Nav SidebarMenu__Nav--secondary">
                <ul class="Linklist Linklist--spacingLoose">
                  <li class="Linklist__Item">
                    <a
                      href="/account/login"
                      class="Text--subdued Link Link--primary"
                    >
                      Account
                    </a>
                  </li>
                  <li class="Linklist__Item">
                    <a
                      href="/pages/wishlist"
                      class="Text--subdued Link Link--primary"
                    >
                      Wishlist
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <aside class="Drawer__Footer" data-drawer-animated-bottom="">
            <ul class="SidebarMenu__Social HorizontalList HorizontalList--spacingFill">
              <li class="HorizontalList__Item">
                <a
                  href="https://www.facebook.com/abovethecloudsstore"
                  class="Link Link--primary"
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                >
                  <span class="Icon-Wrapper--clickable">
                    <svg class="Icon Icon--facebook" viewBox="0 0 9 17">
                      <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z"></path>
                    </svg>
                  </span>
                </a>
              </li>

              <li class="HorizontalList__Item">
                <a
                  href="https://www.instagram.com/abovethecloudsstore/"
                  class="Link Link--primary"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                >
                  <span class="Icon-Wrapper--clickable">
                    <svg
                      class="Icon Icon--instagram"
                      role="presentation"
                      viewBox="0 0 32 32"
                    >
                      <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z"></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default SidebarMenu;
