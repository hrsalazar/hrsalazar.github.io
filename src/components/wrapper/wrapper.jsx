import styled from 'styled-components'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 24px;
  width: 80%;
  max-width: 1100px;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(15px);
  margin: 0px auto 30px auto;
  top: -100px;
  padding: 40px;
  box-shadow: 0 18px 40px rgba(31, 41, 55, 0.18);
  min-height: 200px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 50px rgba(31, 41, 55, 0.22);
  }

  @media (max-width: 780px) {
    width: 92%;
    padding: 25px;
  }
`

export default Wrapper
