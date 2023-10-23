import { useState, useEffect } from 'react'

// assets
import logo from '../assets/logo.png'
const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]
const Navbar = () => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])
  return (
    <div className='navbar bg-base-100 shadow-lg px-4 sm:px-8'>
      <div className='flex-1'>
        <img src={logo} alt='OM' className='btn btn-ghost p-0' />
        <h1 className='text-lg font-bold mx-4'>Theme Toggler</h1>
      </div>
      <div className='flex-none'>
        {/* Toggle Dropdown */}

        <select
          name='theme'
          className='py-2 px-1 rounded border-2 focus-none outline-none'
          onChange={e => setTheme(e.target.value)} //Updating the state here
          id=''
        >
          {themes.map(theme => (
            <option key={theme} value={theme}>
              {theme[0].toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default Navbar
