import React from 'react'
import { Button } from '../ui/button';

const Header = () => {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
        <h1 className="bg-gradient-to-r bg-red-500 text-transparent bg-clip-text text-[20px] font-bold">Tripr</h1>
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header;