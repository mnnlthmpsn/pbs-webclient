import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid'
import { useState, Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CartWidget from './cartWidget'

const Nav = () => {

    const [opened, setOpened] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setOpened(false)
    }, [location]);

    const menus = [
        { name: 'Shop', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Services', route: '/services' },
        { name: 'Contact', route: '/contact' }
    ]

    return (
        <Fragment>
            <div className='sticky z-20 border border-1 border-b inset-0 h-20 lg:h-32 items-center justify-between lg:px-16 px-3 flex backdrop-blur-sm bg-white/50 py-4'>
                <Link to='/'><img src="/assets/img/logo.png" className="h-20 lg:h-32 py-2 cursor-pointer" alt='pbs' /></Link>
                <div className='lg:flex hidden items-center space-x-6'>
                    {
                        menus.map(menu => (
                            <Link to={menu.route} className='text-lg navLink' key={menu.route}>{menu.name}</Link>
                        ))
                    }
                </div>
                <div className={`flex items-center justify-center space-x-6 ${opened && 'opacity-0'}`}>
                    <CartWidget />
                    <MenuAlt3Icon className='h-8 w-8 cursor-pointer text-gray-500 lg:hidden' onClick={() => setOpened(!opened)} />
                </div>
            </div>

            <div className={`fixed right-0 top-0 w-full lg:w-1/2 z-20 h-full backdrop-blur-sm bg-white/80 border border-1 border-gray-50 duration-300 ease-in-out ${opened ? 'translate-x-0' : 'translate-x-full'}`}>
                {opened && <XIcon className='h-8 w-8 cursor-pointer fixed right-10 top-5' onClick={() => setOpened(!opened)} />}
                <div className='flex h-full space-y-10 text-3xl flex-col items-center justify-center'>
                    {
                        menus.map(menu => (
                            <Link to={menu.route} className='navLink' key={menu.route}>{menu.name}</Link>
                        ))
                    }
                    <input className='fixed top-8 lg:top-5 border border-1 border-gray-300 bg-transparent py-3 px-5 w-3/4 text-lg outline-none' placeholder='Search' />
                </div>
            </div>
        </Fragment>
    )
}

export default Nav