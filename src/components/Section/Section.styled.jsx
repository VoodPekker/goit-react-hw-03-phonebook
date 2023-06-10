import styled from 'styled-components';

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[5]}px;
  padding-bottom: ${props => props.theme.space[5]}px;

  max-width: 100%;
  width: 650px;

  box-shadow: -1px -1px 15px rgb(119 119 119);
`;
