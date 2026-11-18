import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaTachometerAlt,
  FaHome,
  FaUser,
  FaChartBar,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa'
import './Sidenav.css'

const links = [
  { name: 'Dashboard', path: '/home/dashboard', icon: <FaTachometerAlt /> },
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: 'Profile', path: '/home/profile', icon: <FaUser /> },
  { name: 'Reports', path: '/reports', icon: <FaChartBar /> },
  { name: 'Messages', path: '/messages', icon: <FaEnvelope /> },
  { name: 'Settings', path: '/settings', icon: <FaCog /> },
]

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-brand">
        <span className="sidenav-logo">O</span>
        <span>October Cohort</span>
      </div>

      <ul className="sidenav-links">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              end
              className={({ isActive }) =>
                isActive ? 'sidenav-link active' : 'sidenav-link'
              }
            >
              <span className="sidenav-icon">{link.icon}</span>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="sidenav-footer">
        <NavLink to="/landing" className="sidenav-link">
          <span className="sidenav-icon"><FaSignOutAlt /></span>
          Logout
        </NavLink>
      </div>
    </div>
  )
}

export default Sidenav
