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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  margin: 0px auto 30px auto;
  top: -100px;
  padding: 40px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
  min-height: 200px;
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.08);
    border-color: rgba(99, 102, 241, 0.15);
  }

  @media (max-width: 780px) {
    width: 92%;
    padding: 25px;
  }
`

export default Wrapper
