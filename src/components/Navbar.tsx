import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
// Served from the CDN. The two CSS-mask uses of this logo (BrandIdentityDesign,
// WebsiteDesignDevelopment) stay on the local file: a cross-origin mask-image
// is not reliably honoured by browsers.
const logo = "https://cdn.perfectpixelpro.com/img/LOGO.webp";

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

// Declared at module level: this never changes, and rebuilding its nineteen
// nested objects inside the component meant re-creating it on every render.
const menuItems: MenuItem[] = [
  { label: 'Work', href: '/work' },
  {
    label: 'Offerings',
    href: '',
    submenu: [
      { label: 'Product Commercialization', href: '/product-commercialization' },
      { label: 'Creative Campaigns', href: '/creative-campaigns' },
      { label: 'Building Brand Awareness', href: '/building-brand-awareness' },
      { label: 'Event Management & Marketing', href: '/event-management-and-marketing' },
      { label: 'Brand Identity & Design', href: '/brand-identity-design' },
      { label: 'Website Design & Development', href: '/website-design-and-development' },
      { label: 'Performance Marketing', href: '/performance-marketing' },
      { label: 'Brand Storytelling', href: '/brand-storytelling' },
      { label: 'Social Media', href: '/social-media' },
      { label: 'Email Marketing', href: '/email-marketing' },
    ],
  },
  { label: 'News', href: '/news' },
  {
    label: 'Life at PPP',
    href: '',
    submenu: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Team & People', href: '/team' },
      // { label: 'Our Culture', href: '/culture' },
      { label: 'Career', href: '/career' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

// Submenu row styling, shared by the desktop and mobile lists. Colour is left
// to CSS classes so hovering never has to go through React state.
const submenuBase = {
  display: 'block',
  textDecoration: 'none',
  fontWeight: '350',
  whiteSpace: 'nowrap',
} as const;

export default function Navbar(): JSX.Element {
  // Hover used to live in React state, which re-rendered the whole navbar on
  // every pointer move between links. It is pure CSS now; only the two
  // click-driven mobile toggles remain as state.
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <nav aria-label="Main" className="w-full bg-white mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── DESKTOP ── */}
        <div className="hidden md:flex flex-col items-center justify-center py-6 sm:py-8" style={{ overflow: 'visible' }}>
          {/* Logo */}
          <div className="mb-6 sm:mb-10">
            <Link to="/" className="inline-block">
              <img loading="eager" decoding="async" fetchPriority="high" src={logo} alt="PPP_Logo" style={{ height: '50px', width: 'auto' }} />
            </Link>
          </div>

          {/* Menu */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            position: 'relative',
            overflow: 'visible',
            width: '100%',
          }}>
            {menuItems.map((item: MenuItem) => (
              <div
                key={item.label}
                className="group"
                style={{ position: 'relative', overflow: 'visible' }}
              >
                <button
                  type="button"
                  onClick={() => item.href !== '#' && navigate(item.href)}
                  className="text-black transition-colors duration-200 group-hover:text-[#ff1616]"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: '350',
                    fontSize: 'inherit',
                    whiteSpace: 'nowrap',
                    padding: '4px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    /* No colour of its own: lucide strokes with currentColor,
                       so it follows the button's colour transition. */
                    <ChevronDown
                      size={10}
                      className="transition-transform duration-200 group-hover:rotate-180"
                      style={{ flexShrink: 0 }}
                    />
                  )}
                </button>

                {/* Dropdown */}
                {item.submenu && (
                  <div
                    className="invisible opacity-0 pointer-events-none transition-all duration-[250ms] ease group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-25px',
                      zIndex: 9999,
                      minWidth: '145px',
                      padding: '12px',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      background: 'white',
                      borderRadius: '24px',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.04)',
                    }}
                  >
                    {item.submenu.map((subitem: MenuItem) => (
                      <Link
                        key={subitem.label}
                        to={subitem.href}
                        className="text-black transition-all duration-200 hover:text-[#ff1616]"
                        style={{
                          ...submenuBase,
                          padding: '12px 14px',
                          fontSize: '14px',
                          borderRadius: '12px',
                        }}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE HEADER ── */}
        <div className="md:hidden flex items-center justify-between py-4">
          <Link to="/" className="inline-block">
            <img loading="eager" decoding="async" fetchPriority="high" src={logo} alt="PPP Logo" style={{ height: '40px', width: 'auto' }} />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="p-2"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#000000' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-100">
            {menuItems.map((item: MenuItem) => (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => {
                    if (item.submenu) {
                      // Toggle the submenu open/closed
                      setMobileDropdown(mobileDropdown === item.label ? null : item.label);
                    } else {
                      // No submenu — close the menu and navigate
                      setMobileMenuOpen(false);
                      navigate(item.href);
                    }
                  }}
                  aria-expanded={item.submenu ? mobileDropdown === item.label : undefined}
                  className="text-black bg-transparent transition-all duration-200 hover:text-[#ff1616] hover:bg-[#f5f5f5]"
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '350',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200"
                      style={{
                        transform: mobileDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  )}
                </button>

                {/* Mobile Submenu */}
                {item.submenu && mobileDropdown === item.label && (
                  <div
                    style={{
                      backgroundColor: 'transparent',
                      borderRadius: '6px',
                      marginTop: '4px',
                      marginLeft: '8px',
                    }}
                  >
                    {item.submenu.map((subitem: MenuItem) => (
                      <Link
                        key={subitem.label}
                        to={subitem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-black transition-colors duration-200 hover:text-[#ff1616]"
                        style={{
                          ...submenuBase,
                          padding: '10px 16px',
                          fontSize: '14px',
                        }}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
