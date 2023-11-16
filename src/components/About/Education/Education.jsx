import s from './Education.module.scss';
import Wrapper from '../../common/Wrapper/Wrapper';
import CertificatePDF from './Сertificate.pdf';

const institutions = [
  {
    institution: 'Khmelnytsky National University',
    specialty: 'Master Degree, Personnel management and labor economics',
    trainingPeriod: 'September 2019 – December 2020'
  },
  {
    institution: 'Khmelnytsky National University',
    specialty: 'Bachelor Degree, Personnel management and labor economics',
    trainingPeriod: 'September 2015 – Lune 2019'
  },
  {
    institution: 'Beetroot Academy',
    specialty: 'Front-End Developer',
    trainingPeriod: 'June 2021 - October 2021'
  }
]

const Education = () => {
  return (
    <div className={s.education}>
      <Wrapper title={<>My <span>education</span></>}>
        {institutions.map((i, idx) => (
          <div className={s.content} key={idx}>
            <h4>{i.institution}</h4>
            <p>{i.specialty}</p>
            <span>{i.trainingPeriod}</span>
          </div>
        ))}
        <div className={s.certificate}>
          <a href={CertificatePDF} target="_blank" className={s.certificateFile}>Certificate</a>
        </div>
      </Wrapper>
    </div>
  )
}

export default Education