import React from 'react'
import {Facebook , Twitter, Linkedin , Instagram } from 'lucide-react'

const NavRedes = () => {
    return (
        <div className='justify-around mx-2 mt-6'>
   <button className='bntRedes bnt'>
              <Instagram/>
            </button>


            <button className='bntRedes bnt'>
              <Facebook/>
            </button>
            <button className='bntRedes bnt'>
             <Twitter />
            </button>
            <button className='bntRedes bnt'>
             <Linkedin />
            </button>




        </div>
    )
}

export default NavRedes
