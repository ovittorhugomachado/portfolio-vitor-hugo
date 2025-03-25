import { SkillCard } from "../skillCard"
import skillsList from "../../../json/hard-skills.json"
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { PiFigmaLogoLight } from "react-icons/pi";

const Skills = () => {

    const iconComponents = {
        FaHtml5: FaHtml5,
        FaCss3Alt: FaCss3Alt,
        RiJavascriptFill: RiJavascriptFill,
        FaReact: FaReact,
        PiFigmaLogoLight: PiFigmaLogoLight,
        FaGitAlt: FaGitAlt,
    };

    return (
        <main>
            <h1>Skills</h1>
            <div className="container-skills">
                <div className="skills">
                    {skillsList.mainSkills.map((skill, index) => {
                        const IconComponent = iconComponents[skill.icon];
                        return (
                            <SkillCard
                                key={index}
                                icon={<IconComponent className="skill" />}
                                name={skill.name}
                            />
                        );
                    })}
                </div>
                <div className="skills">
                    {skillsList.secondarySkills.map((skill, index) => (
                        <h5 key={index} className="skill">{skill.name}</h5>
                    ))
                    }
                </div>
            </div>
            <br /><br />
            <h1>Soft Skills</h1>
            <h5 className="title">Aprendizado constante</h5>
            <p>Tenho uma grande curiosidade em entender como as tecnologias funcionam e como posso aplicá-las da melhor forma. Por isso, busco todos os dias aprender algo novo e me manter atualizado sobre as tendências de linguagens e bibliotecas. Acredito que esse hábito me ajuda a evoluir e a estar pronto para novos desafios</p>

            <h5 className="title">Trabalho em equipe</h5>
            <p>Tenho facilidade para trabalhar com outras pessoas e sou aberto a diferentes pontos de vista. Sei que a troca de conhecimento e uma comunicação clara são fundamentais para o sucesso de um projeto.</p>

            <h5 className="title">Honestidade</h5>
            <p>Acredito que transparência e sinceridade são fundamentais em qualquer ambiente profissional. Sempre prefiro admitir quando não sei algo ou quando cometo um erro, pois vejo nisso uma oportunidade de aprendizado e melhoria. Para mim, a verdade é o caminho mais eficiente para a excelência.</p>

            <h5 className="title">Comprometimento</h5>
            <p>Sou responsável e focado em entregar o melhor resultado possível. Mesmo no início da carreira, me esforço para garantir um código limpo e de qualidade, focando na em uma base sólida com as linguagens que trabalho.</p>
        </main>
    )
}

export { Skills }