import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 0 0.5rem;
  background-color: var(--mainBlue);
  background-color: #fafafa;
  min-height: 100vh;
`

export const img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 3px;
`

export const h2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-align: center;
`

export const p = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  text-align: center;
`

export const Button = styled.button`
  background: ${(props) => (props.primary ? 'white' : 'lightblue')};
  color: ${(props) => (props.primary ? 'blue' : 'mainDark')};
  font-size: 1em;
  /* margin: 1em;  */
  padding: 0.25em 1em;
  border: 2px solid var(--lightBlue);
  border-radius: 3px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? 'yellow' : 'black')};
    color: ${(props) => (props.primary ? 'black' : 'yellow')};
  }
`
