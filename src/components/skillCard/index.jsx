import { Skill } from "./style";

const SkillCard = ({ icon, name }) => {
    
    return (
        <Skill>
            {icon}
            <h5>{name}</h5>
        </Skill>
    )
}

export { SkillCard }