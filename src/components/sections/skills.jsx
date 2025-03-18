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

    console.log(skillsList)
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
                                icon={<IconComponent />}
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
            <h5>Comunicação</h5>
            <p>Considero minha comunicação um ponto positivo, tanto pela clareza em tirar dúvidas ou na forma objetiva e didática de expressar minhas ideias.</p>

            <h5>Honestidade</h5>
            <p>Em qualquer área considero esse o principal valor, seja no momento de mostrar alguma insegurança ou de reconhecer um erro, sempre opto pela verdade, acho que esse é o melhor caminho para chegar próximo da excelêcia.</p>

            <h5>Aprendizado constante</h5>
            <p>Busco todos os dias aprender algo novo e me manter atualizado sobre as tendências de linguagens e bibliotecas, seja por vídeos, cursos ou fóruns de dúvidas.</p>
        </main>
    )


}

export { Skills }