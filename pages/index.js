import Image from 'next/image'
import { fetcher } from '../lib/api'

export default function Home({ heroContent, ctaContent, section1Content, section2Content }) {
  const hero = heroContent.data.attributes.hero
  const cta = ctaContent.data.attributes.cta
  const section1 = section1Content.data.attributes.section_1
  const section2 = section2Content.data.attributes.section_2
  console.log(hero)
  return (
    <div>
      <section id="hero">
        <h1 className="section-title">{hero.section_title}</h1>
        <p>{hero.section_text}</p>
        <Image
            src={`http://localhost:1337${hero.section_image.data.attributes.url}`}
            alt={`Piquette`}
            width={620}
            height={560}
        />
      </section>
      <section id="product-info">
        <h1 className="section-title">{section1.section_title}</h1>
        <p>{section1.section_text}</p>
        <Image
            src={`http://localhost:1337${section1.section_image.data.attributes.url}`}
            alt={`Piquette`}
            width={560}
            height={140}
        />
      </section>
      <section id="recipes">
        <h1 className="section-title">{section2.section_title}</h1>
        <p>{section2.section_text}</p>
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  const heroResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home?populate=hero.section_image`)
  const ctaResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home?populate=CTA`)
  const section1Response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home?populate=section_1.section_image`)
  const section2Response = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home?populate=section_2.section_image`)
  return {
      props: {
          heroContent: heroResponse,
          ctaContent: ctaResponse,
          section1Content: section1Response,
          section2Content: section2Response,
      }
  }
}
