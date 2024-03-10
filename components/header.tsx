import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './themeToggler'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <Link href="/" className='flex items-center gap-2'>
            <div className='bg-[#0160FE] w-fit'>
                <Image 
                    src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
                    alt='logo'
                    className=''
                    height={50}
                    width={50}
                />
            </div>
            <h1 className='font-bold text-xl'>Dropbox</h1>
        </Link>
        <div className='flex items-center px-5 gap-2'>
            <ModeToggle/>
            <UserButton afterSignOutUrl='/'/>
            <SignedOut>
                <SignInButton afterSignInUrl='/dashboard' mode='modal'/>
            </SignedOut>
        </div>
    </div>
  )
}

export default Header