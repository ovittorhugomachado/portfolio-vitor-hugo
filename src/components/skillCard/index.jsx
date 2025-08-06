import { Skill } from "./style";

const SkillCard = ({ icon, name }) => {
    
    return (
        <Skill>
            {icon}
            <h6>{name}</h6>
        </Skill>
    )
}

export { SkillCard }