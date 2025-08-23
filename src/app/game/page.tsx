import React from 'react'
import Navbar from '@/components/Navbar'
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center space-y-10 pb-20'>
                <iframe frameBorder="0" src="https://itch.io/embed-upload/14743221?color=000000" allowFullScreen width="1280" height="740"><a href="https://ray557.itch.io/roga-the-metaverse">Play Roga &amp; The Metaverse! on itch.io</a></iframe>                
                <iframe frameBorder="0" src="https://itch.io/embed/3831059?bg_color=14248f&amp;fg_color=fff&amp;link_color=ec0bf7&amp;border_color=14248f" width="552" height="167"><a href="https://ray557.itch.io/roga-the-metaverse">Roga &amp; The Metaverse! by Ray557</a></iframe>
            </div>
        </div>
    )
}

export default page