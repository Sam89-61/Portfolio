import React from 'react'

function IconCompetence({ img, label }: { img?: string, label?: string }) {
    return (
        <div className=" flex items-center justify-center cursor-pointer text-foreground border border-foreground rounded-md p-2 hover:bg-primary  transition-colors duration-500 " >
            <div className='flex flex-row items-center gap-2 justify-between'> 
                <img src={`assets/${img}`} alt="icon competence" className="w-8 h-8" />
                <p className="font-sans">{label}</p>
            </div>
        </div>
    )
}

export default IconCompetence
