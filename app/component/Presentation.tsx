import Section from "./Section1"
import Image from "next/image"
function Presentation() {
    return (
        <Section className="lg:flex lg:flex-row flex-col-reverse flex-between items-center gap-8 lg:gap-16">
            <div className="flex-2">
                <h2 className="text-primary font-poppins text-4xl font-bold mb-1.5">Samuel Aubine Bourdon</h2>
                <h3 className="text-secondary font-poppins text-xl font-semibold mb-1.5"> Developpeur web full-stack Junior</h3>
                <p className="font-mono text-lg"> Je suis étudiant en développement web et je suis à la recherche d&apos;opportunités pour mettre en pratique mes compétences.</p>
            </div>
            <div className="flex-1 flex justify-center items-center mt-2.5">
                <img src="assets/moi.jpg" className="h-52 w-52 object-cover border-4 border-accent-foreground "
                    style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}></img>
            </div>
        </Section>
    )
}

export default Presentation