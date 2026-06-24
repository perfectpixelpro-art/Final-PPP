import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import "@fontsource/archivo/300.css";
import "@fontsource/archivo/300-italic.css";

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

export default function Navbar(): JSX.Element {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { label: 'Work', href: '/work' },
    { label: 'News', href: '/news' },
    {
      label: 'Life at PPP',
      href: '',
      submenu: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Team & People', href: '/team' },
        { label: 'Our Culture', href: '/culture' },
        { label: 'Career', href: '/career' },
      ],
    },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="w-full bg-white mt-6" style={{ fontFamily: 'Archivo, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── DESKTOP ── */}
        <div className="hidden md:flex flex-col items-center justify-center py-6 sm:py-8" style={{ overflow: 'visible' }}>
          {/* Logo */}
          <div className="mb-6 sm:mb-10">
            <a href="/" className="inline-block">
              <img src={logo} alt="PPP Logo" style={{ height: '50px', width: 'auto' }} />
            </a>
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
                style={{ position: 'relative', overflow: 'visible' }}
                onMouseEnter={() => {
                  setHoveredLink(item.label);
                  if (item.submenu) setHoveredDropdown(item.label);
                }}
                onMouseLeave={() => {
                  setHoveredLink(null);
                  setHoveredDropdown(null);
                }}
              >
                <button
                  onClick={() => item.href !== '#' && navigate(item.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontWeight: '500',
                    fontSize: 'inherit',
                    whiteSpace: 'nowrap',
                    padding: '4px 0',
                    transition: 'color 0.2s',
                    color: hoveredLink === item.label ? '#ff1616' : '#000000',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Archivo, sans-serif',
                  }}
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={10}
                      style={{
                        transform: hoveredDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: hoveredLink === item.label ? '#ff1616' : '#000000',
                        transition: 'transform 0.2s, color 0.2s',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </button>

                {/* Dropdown */}
                {item.submenu && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(40% + 8px)',
                      left: '-25px',
                      zIndex: 9999,
                      opacity: hoveredDropdown === item.label ? 1 : 0,
                      visibility: hoveredDropdown === item.label ? 'visible' : 'hidden',
                      transition: 'all .25s ease',
                      pointerEvents: hoveredDropdown === item.label ? 'auto' : 'none',
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
                      <a
                        key={subitem.label}
                        href={subitem.href}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          (e.target as HTMLAnchorElement).style.color = '#ff1616';
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          (e.target as HTMLAnchorElement).style.color = '#000000';
                        }}
                        style={{
                          display: 'block',
                          padding: '12px 14px',
                          color: '#000000',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          borderRadius: '12px',
                          transition: 'all 0.2s ease',
                          fontFamily: 'Archivo, sans-serif',
                        }}
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE HEADER ── */}
        <div className="md:hidden flex items-center justify-between py-4">
          <a href="/" className="inline-block">
            <img src={logo} alt="PPP Logo" style={{ height: '40px', width: 'auto' }} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                  onMouseEnter={() => setHoveredLink(item.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    color: hoveredLink === item.label ? '#ff1616' : '#000000',
                    backgroundColor: hoveredLink === item.label ? '#f5f5f5' : 'transparent',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s',
                    fontFamily: 'Archivo, sans-serif',
                  }}
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      style={{
                        transform: mobileDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: hoveredLink === item.label ? '#ff1616' : '#000000',
                        transition: 'transform 0.2s, color 0.2s',
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
                      <a
                        key={subitem.label}
                        href={subitem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          (e.target as HTMLAnchorElement).style.color = '#ff1616';
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          (e.target as HTMLAnchorElement).style.color = '#000000';
                        }}
                        style={{
                          display: 'block',
                          padding: '10px 16px',
                          color: '#000000',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          transition: 'color 0.2s',
                          fontFamily: 'Archivo, sans-serif',
                        }}
                      >
                        {subitem.label}
                      </a>
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