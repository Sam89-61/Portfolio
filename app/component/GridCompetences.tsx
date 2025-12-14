import React from 'react'
import IconCompetence from './iconCompetence'
function GridCompetences({ className }: { className?: string }) {
    const skills = [
        { img: 'html.svg', label: 'HTML' },
        { img: 'css.svg', label: 'CSS' },
        { img: 'js.svg', label: 'JS' },
        { img: 'react.svg', label: 'React' },
        { img: 'nextjs.svg', label: 'Next.js' },
        { img: 'ts.svg', label: 'TypeScript' },
        { img: 'nodejs.svg', label: 'Node.js' },
        { img: 'sql.svg', label: 'SQL' },
        { img: 'python.svg', label: 'Python' },
        { img: 'php.svg', label: 'PHP' },
        { img: 'symfony.svg', label: 'Symfony' },
        { img: 'tailwindcss.svg', label: 'Tailwind' },
        { img: 'bootstrap.svg', label: 'Bootstrap' },
        { img: 'shadcn.svg', label: 'Shadcn' },
        { img: 'dart.svg', label: 'Dart' },
        { img: 'flutter.svg', label: 'Flutter' },
        { img: 'wordpress.svg', label: 'WordPress' },


    ]
    return (
        <div className={`${className}`}> 
            <div className='mb-6'> 
                <h2 className="text-2xl font-semibold mb-1.5 text-center font-mono text-secondary">Développement Web/Mobile</h2>
            </div>
            <div className={`flex flex-wrap gap-6 justify-center`}>
                {skills.map((skill, index) => (
                    <IconCompetence key={index} img={skill.img} label={skill.label} />
                ))}              

            </div>
        </div>
    )
}

export default GridCompetences
