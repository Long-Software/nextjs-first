import Link from 'next/link'
const links = [
  { href: '/about', label: 'About' },
  { href: '/drinks', label: 'Drink' },
  { href: '/tasks', label: 'Tasks' },
  { href: '/prisma-example', label: 'Prisma' }
]
const Navbar = () => {
  return (
    <nav className='bg-base-300 py-2'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link href='/' className='btn btn-primary'>
          Home
        </Link>
        <ul className='menu menu-horizontal md:ml-8'>
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} className='capitalize'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
