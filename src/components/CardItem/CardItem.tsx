import { Card } from 'react-bootstrap'
import Image from 'next/image'
import { JobDescriptionType } from '../../views/Home/Home'

import styles from './CardItem.module.scss'

type CardItemProps = {
  item: JobDescriptionType
}

export const CardItem = ({ item }: CardItemProps) => {
  const { company, companyImage, jobTitle, startDate, endDate, currentJob } = item

  return (
    <Card>
      <Card.Header className={styles.card_header}>
        <Image
          width={50}
          height={50}
          className={styles.company_image}
          src={companyImage}
          alt={`${company} logo`}
        />
        <span>
          {company}
        </span>
      </Card.Header>
      <Card.Body>
        <Card.Title className={styles.job_title}>
          {jobTitle}
        </Card.Title>
        <Card.Text
          className={styles.job_period}>{startDate} - {currentJob ? 'Presente' : endDate}</Card.Text>
      </Card.Body>
    </Card>
  )
}