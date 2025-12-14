import React from 'react'
import "../../public/style/glitchTitle.css"
function GlitchTitle({$title}: { $title?: string}) {
    return (
        <div>

            <div className="glitch-bloc">
                <h2 className="text-foreground font-poppins text-3xl font-bold mb-1.5 invisible-text">{$title}</h2>
                <h2 className="text-primary font-poppins text-3xl font-bold mb-1.5 glitchAnim">{$title}</h2>
                <h2 className="text-destructive font-poppins text-3xl font-bold mb-1.5 glitchAnim">{$title}</h2>
                <h2 className="text-foreground font-poppins text-3xl font-bold mb-1.5 glitchAnim">{$title}</h2>

            </div>
        </div>
    )
}

export default GlitchTitle
