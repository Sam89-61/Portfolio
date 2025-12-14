import React from 'react'
import IconCompetence from './iconCompetence'
function GridOutils({ className }: { className?: string }) {
    const skills = [
        { img : "git.svg", label: "Git" },
        { img : "github.svg", label: "GitHub" },
        { img : "docker.svg", label: "Docker" },
        { img : "vs.svg", label: "VS Code" },
        { img : "figma.svg", label: "Figma" },


    ]
    return (
        <div className={`${className}`}> 
            <div className='mb-6'> 
                <h2 className="text-2xl font-semibold mb-1.5 text-center font-mono text-secondary">Outils</h2>
            </div>
            <div className={`flex flex-wrap gap-6 justify-center`}>
                {skills.map((skill, index) => (
                    <IconCompetence key={index} img={skill.img} label={skill.label} />
                ))}              

            </div>
        </div>
    )
}

export default GridOutils
