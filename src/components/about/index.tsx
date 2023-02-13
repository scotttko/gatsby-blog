import * as S from './styles'

interface AboutProps {
  resume: string
}
const About = ({ resume }: AboutProps) => (
  <S.AboutWrapper>
    <div className="markdown" dangerouslySetInnerHTML={{ __html: resume }} />
  </S.AboutWrapper>
)

export default About
