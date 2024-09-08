import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import avatarImg from '../../assets/images/profile_2.jpeg'
import Layout from '../../components/Layout/Layout'
import posts from '../../utils/posts.json'
import PostItem from '../../components/PostItem/PostItem'

import s from './Home.module.scss'
import { Col, ProgressBar } from 'react-bootstrap'
import Link from 'next/link'
import ArrowRight from '../../components/Icons/ArrowRight'
import { CardItem } from '../../components/CardItem/CardItem'

export type JobDescriptionType = {
  company: string
  jobTitle: string
  companyImage: string
  startDate: string
  endDate?: string
  currentJob: boolean
}

const filteredPosts = posts.slice(0, 4)
const jobList: JobDescriptionType[] = [{
  company: 'GlobalLogic',
  jobTitle: 'Software Engineer',
  companyImage: 'https://media.licdn.com/dms/image/v2/C560BAQHfsFr91ekzrQ/company-logo_200_200/company-logo_200_200/0/1630647080208/globallogic_logo?e=1733961600&v=beta&t=7us9gLjCJ_pH3CJPMh6MEI1trSwjV80ZKKLLaIaoRfg',
  startDate: 'Noviembre 2023',
  currentJob: true,
}, {
  company: 'Globant',
  jobTitle: 'Web UI Developer',
  companyImage: 'https://media.licdn.com/dms/image/v2/D4D0BAQHupr1U3gIQKA/company-logo_200_200/company-logo_200_200/0/1719839010650/globant_logo?e=1733961600&v=beta&t=6ytosjo4fjpj6F1hIGTrBjoYEvLcBhueHrRrgGcPCoM',
  startDate: 'Septiembre 2021',
  endDate: 'Septiembre 2023',
  currentJob: false,
}, {
  company: 'INAD',
  jobTitle: 'Desarrollador Web',
  companyImage: 'https://scontent.fgdl10-1.fna.fbcdn.net/v/t39.30808-6/348244484_598919012337396_4369887818259214086_n.png?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-CRT4L2RWa0Q7kNvgEiQu59&_nc_ht=scontent.fgdl10-1.fna&oh=00_AYDZIbn-VSiyyY66LNblyADqrsUxrmpDvuqoOA5lGxkP4g&oe=66E31A16',
  startDate: 'Octubre 2020',
  endDate: 'Febrero 2021',
  currentJob: false,
}]

export default function Home() {
  return (
    <Layout title="Juanda Martinez">
      <Row className={`mb-4 ${s.info_container}`}>
        <Col className={`mb-4 ${s.info_text}`} xs={12} md={8}>
          <h1 className={`${s.info_highlight}`}>Hola! Soy Juanda 👋🏻</h1>
          <h2 className={s.info_2}>Ingeniero en Sistemas Computacionales en México 🇲🇽</h2>
        </Col>
        <Col xs={12} md={4} className={`${s.image_container}`}>
          <Image src={avatarImg} alt="Memoji avatar" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <p>
            Desarrollador web especializado en JavaScript, TypeScript y React/Next.js.{' '}
            <Link href="/about">
              Saber más <ArrowRight size={22} className={s.arrow} />
            </Link>
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12} className={s.posts_heading}>
          <hr />
          <h2 className={`mb-4 ${s.info_2}`}>Experiencia Laboral</h2>
        </Col>
        <Col xs={12} className={s.posts_container}>
          {jobList.map((item, index) => (
            <CardItem item={item} key={`${item.company}-${item.jobTitle}-${index}`} />
          ))}
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12} className={s.posts_heading}>
          <hr />
          <h2 className={`mb-4 ${s.info_2}`}>Proyectos favoritos</h2>
        </Col>
        <Col xs={12} className={s.posts_container}>
          <span>Próximamente...</span>
          <ProgressBar animated now={45} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className={s.posts_heading}>
          <hr />
          <h2 className={`mb-4 ${s.info_2}`}>Últimos posts</h2>
        </Col>
        <Col xs={12} className={s.posts_container}>
          {filteredPosts.map((item) => (
            <PostItem item={item} key={item.slug} />
          ))}
        </Col>
      </Row>
    </Layout>
  )
}
