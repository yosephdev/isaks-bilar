import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1em 2em;
  min-height: 100vh;
  background-color: var(--main-background-color);
  color: var(--main-text-color);  
`

export const Button = styled.button`
  background: ${(props) => (props.primary ? '#f9fbf2' : '#1e2019')};
  color: ${(props) => (props.primary ? '#1e2019' : '#f9fbf2')};
  font-size: 1em;
  margin: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid #fff;
  border-radius: 3px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? '#fb8f67' : '#1e2019')};
    color: ${(props) => (props.primary ? '#1e2019' : '#fb8f67')};
  }
`



  







  
