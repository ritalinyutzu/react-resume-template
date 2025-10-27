import {FC, memo, PropsWithChildren} from 'react';
import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../data/dataDef';
import {skills} from '../../data/data';

const Skills: FC = memo(() => {
  return (
    <section className="bg-neutral-800" id="skills">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-y-8 px-4 py-16 sm:gap-y-12 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="self-center text-xl font-bold text-white">Skills</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((skillgroup, index) => (
            <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;

const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="mb-4 text-center text-lg font-bold text-white">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

const Skill: FC<PropsWithChildren<{skill: SkillType}>> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = Math.round((level / max) * 100);

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium text-white">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div
          className="h-full rounded-full bg-orange-400"
          style={{width: `${percentage}%`}}
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
