import Layout from '../../components/Layout/Layout'
import { Col, Row } from 'react-bootstrap'
import s from './About.module.scss'
import { calculateRelativeDate } from '../../utils'
import Link from 'next/link'

export default function About() {
  return (
    <Layout title="Acerca de mí">
      <Row>
        <h1 className={`mb-5 ${s.title}`}>Acerca de mí</h1>
        <hr />
      </Row>
      <Row>
        <Col>
          <p>
            Mi nombre es Juan Daniel Martinez, tengo{' '}
            {calculateRelativeDate('1997-02-27')} años y soy Ingeniero en
            Sistemas Computacionales.
          </p>
          <p>
            Tengo {calculateRelativeDate('2019-07-01')} años enfocado en el
            desarrollo web, me gusta mucho crear aplicaciones centradas en el
            usuario y a la vez me esfuerzo para entregar siempre diseños
            agradables a la vista ✨ Últimamente me ha gustado mucho documentar
            mi proceso de aprendizaje a través de mi blog, donde me esmero por
            explicar mi perspectiva de ciertos temas avanzados en el campo de la
            ingeniería de software, a veces de una manera más visual, con el
            objetivo de que sea más digerible para cualquiera que lo lea 😁 Si
            te interesa leer mis posts, puedes dirigirte a mi{' '}
            <a href="https://dev.to/juandadev">
              perfil en Dev.to
            </a>{' '}
            que es donde posteo más frecuentemente (English only), o también{' '}
            <Link href="/blog">
              aquí mismo
            </Link>{' '}
            en esta página, la cual suelo desahogarme más escribiendo en Español
            :)
          </p>
          <p>
            En mi tiempo libre, disfruto pensando en temas para escribir en mi
            blog y me reto a explicarlos de la mejor manera para mejorar mis
            habilidades técnicas. Además, amo los videojuegos de aventura y
            estrategia, y tengo una obsesión con los Legos.
          </p>
        </Col>
      </Row>
    </Layout>
  )
}
