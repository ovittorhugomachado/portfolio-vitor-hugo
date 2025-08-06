import { SkillCard } from "../skillCard"
import skillsList from "../../../json/hard-skills.json"
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { PiFigmaLogoLight } from "react-icons/pi";
import { FaNodeJs, FaDocker } from "react-icons/fa6";
import { SiPrisma, SiSwagger, SiStyledcomponents, SiReacthookform } from "react-icons/si";


const Skills = () => {

    const iconComponents = {
        FaHtml5: FaHtml5,
        FaCss3Alt: FaCss3Alt,
        RiJavascriptFill: RiJavascriptFill,
        BiLogoTypescript: BiLogoTypescript,
        FaReact: FaReact,
        PiFigmaLogoLight: PiFigmaLogoLight,
        FaGitAlt: FaGitAlt,
        BiLogoPostgresql: BiLogoPostgresql,
        FaNodeJs: FaNodeJs,
        SiPrisma: SiPrisma,
        FaDocker: FaDocker,
        RiTailwindCssFill: RiTailwindCssFill,
        SiSwagger: SiSwagger,
        SiStyledcomponents: SiStyledcomponents,
        FaGithub: FaGithub,
        SiReacthookform: SiReacthookform,
        TbApi: TbApi
    };

    return (
        <main>
            <h1>Hard skills</h1>
            <div className="container-skills">

                <div className="skills">
                    {skillsList.frontEndSkills.map((skill, index) => {
                        const IconComponent = iconComponents[skill.icon];
                        return (
                            <SkillCard
                                key={index}
                                icon={<IconComponent className="skill" />}
                                name={skill.name}
                            />
                        );
                    })}
                    {skillsList.backEndSkills.map((skill, index) => {
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
            </div>
            <br /><br />
            <h1>Soft Skills</h1>
            <h5 className="title">Aprendizado constante</h5>
            <p>Tenho uma grande curiosidade em entender como as tecnologias funcionam e como posso aplicá-las da melhor forma. Por isso, busco todos os dias aprender algo novo e me manter atualizado sobre as tendências de linguagens e bibliotecas. Acredito que esse hábito me ajuda a evoluir e a estar pronto para novos desafios</p>

            <h5 className="title">Trabalho em equipe</h5>
            <p>Por sempre ter trabalhado com atendimento ao público, tenho facilidade em me comunicar com outras pessoas e sou aberto a diferentes pontos de vista. Sei que a troca de conhecimento e uma comunicação clara são fundamentais para o sucesso de um projeto.</p>

            <h5 className="title">Honestidade</h5>
            <p>Acredito que transparência e sinceridade são fundamentais em qualquer ambiente profissional. Sempre prefiro admitir quando não sei algo ou quando cometo um erro, pois vejo nisso uma oportunidade de aprendizado e melhoria. Para mim, a verdade é o caminho mais eficiente para a excelência.</p>

            <h5 className="title">Comprometimento</h5>
            <p>Sou responsável e focado em entregar o melhor resultado possível. Mesmo no início da carreira, me esforço para garantir um código limpo e de qualidade, focando na em uma base sólida com as linguagens que trabalho.</p>
        </main>
    )
}

export { Skills }