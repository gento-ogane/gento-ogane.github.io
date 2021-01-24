import { Chip } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';


const Skills:React.FC=()=>{

    return(
    <>
        <p>Languages</p>
      <Row>
        <SkillChip label='JavaScript' />
        <SkillChip label='TypeScript' />
        <SkillChip label='Ruby' />
        <SkillChip label='Python' />
        <SkillChip label='C#' />
      </Row>
      <p>FrameWorks</p>
      <Row>
        <SkillChip label='React' />
        <SkillChip label='React Native' />
        <SkillChip label='Unity' />
        <SkillChip label='Ruby on Rails' />
        <SkillChip label='Amplify' />
        <SkillChip label='Flask' />
        <SkillChip label='AWS' />
        <SkillChip label='GAS' />
        <SkillChip label='Docker' />
      </Row>
    </>)

}

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  flex-wrap: wrap;
  width: 40%;
  margin: auto;
  margin-bottom: 60px;
`;

const SkillChip = styled(Chip)`
  margin: 10px;
`;

export default Skills 