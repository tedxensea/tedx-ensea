import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function GlobalFooter() {
  return <p>GlobalFooter</p>
}

function Layout({ children }) {
  return (
    <div className='w-full min-h-screen antialiased bg-[#000] text-[#fff]'>
      <Head>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalNav />
      {children}
      <GlobalFooter />

    </div>
  )
}

function Container({children}) {
  return (
    <div className='container mx-auto px-4'>
      {children}
    </div>
  )
}

function HeroSection(props) {
  return (
    <header className='pt-16 text-center'>
      <Container>
        <p className='mt-3 text-2xl font-normal'>
          {props.eyebrow}
        </p>

        <h1 className='mt-4 text-8xl font-extrabold cursor-default select-none'>
          <span className='bg-clip-text text-transparent bg-gradient-to-br from-slate-50 to-slate-200'>
            {props.headline}
          </span>
        </h1>

        <p className='mt-6 text-xl font-light'>
          <span className='block'>
            {props.date}
          </span>
          <span className='block'>
            {props.location}
          </span>
        </p>
        <ul className='mt-8 flex flex-col md:flex-row gap-x-4 gap-y-2 justify-center font-medium'>
          <li>
            <Link href={props.ctaP_url}>
              <a className='rounded-full bg-red-600 inline-block px-4 py-2 hover:bg-red-500'>
                {props.ctaP}
              </a>
            </Link>
          </li>
          <li>
            <Link href={props.ctaS_url}>
              <a className='hover:underline'>
                {props.ctaS}
              </a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

function Section(props) {
  return (
    <section>
      <Container>

        <h2 className='mt-8 text-3xl sm:text-4xl font-extrabold tracking-tight text-red-50'>
          {props.headline}
        </h2>

        <p className='mt-4 max-w-3xl space-y-6'>
          {props.eyebrow}
        </p>

        <div className='mt-8'>
          {props.children}
        </div>

      </Container>
    </section>
  )
}

function SpeakerCardStack({ children }) {
  return (
    <div className='grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {children}
    </div>
  )
}

class SpeakerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {

    let bottom;
    if (this.state.isToggleOn) {
      bottom = (
        <blockquote className="mt-2 font-light">
          {this.props.description}
        </blockquote>
      )
    } else {
      bottom = (
        <div className='mt-2 group-hover:underline'>
          En savoir plus
        </div>
      )
    }

    return (
      <figure
        className='group cursor-pointer overflow-hidden rounded-3xl block transition ease-in-out hover:scale-[1.007] bg-gradient-to-b from-[#061420] to-[#151516] shadow-xl'
        onClick={this.handleClick}
      >

        <div
          className='aspect-square bg-cover bg-center grayscale group-hover:grayscale-0'
          style={{
            backgroundImage: `url(/images/speakers/${this.props.firstName}-${this.props.lastName}.jpg)`,
          }}></div>

        <div className='p-4 text-center'>
          <figcaption>
            <div className='mt-4 font-semibold text-2xl'>
              {this.props.firstName} {this.props.lastName}
            </div>
            <div className='mt-4 font-medium text-lg'>
              {this.props.title}
            </div>
          </figcaption>

          
          {bottom}

        </div>
        
      </figure>
    );
  }
}

function Team({ children }) {
  return (
    <div className='flex flex-wrap justify-between'>
      {children}
    </div>
  )
}

function TeamMember(props) {
  return (
    <figure className='group relative max-w-sm transition ease-in-out hover:scale-[1.007]'>
      <div
        className='aspect-square overflow-hidden bg-cover bg-center rounded-full drop-shadow-xl  group-hover:sepia group-hover:blur-sm'
        style={{
          backgroundImage: `url(/images/team/${props.firstName}-${props.lastName}.jpg)`,
        }}></div>
      <figcaption className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  invisible group-hover:visible text-center'>
        <div className='text-xl font-bold'>
          {props.firstName} {props.lastName}
        </div>
        <div className='text-md font-medium mt-2'>
          {props.role}
        </div>
      </figcaption>
    </figure>
  )
}

export default function Home() {
  return (
    <Layout>

      <HeroSection
        eyebrow="TEDxENSEA 2022"
        headline="ESCAPE"
        date="Samedi 5 février 2022"
        location="Auditorium de l'IPSL"
        ctaP="Acheter votre billet"
        ctaP_url="#"
        ctaS="Voir les speakers"
        ctaS_url="#"
      />


      <Section
        headline="Nos Speakers"
        eyebrow="Avec la volonté d'amener les gens à reconsidérer leur façon de penser et remettre en question ce qu'ils prennent pour acquis, nous avons soigneusement sélectionné nos 7 speakers."
      >
        <SpeakerCardStack>
          <SpeakerCard
            firstName="Alain"
            lastName="Brunet"
            title="Comment faire face aux troubles du stress post-traumatique ?"
            description={
              <p>
                Alain est professeur à l'université McGill depuis 20 ans et membre de l’académie des sciences de la santé, au Canada.
                À la suite d’une expérience personnelle, il a eu envie d'aider les personnes ayant subi des chocs traumatiques.
                Cet intérêt lui a conduit à effectuer des recherches en neurosciences sur le rôle de la mémoire dans la persistance du traumatisme.
                Sur la base de ces travaux, une thérapie innovante a été proposée aux victimes du Bataclan et de Nice.
                En parallèle, il a également co-dirigé pendant quelques années le <i>Journal of Traumatic Stress</i> et <i>l'International Society for Traumatic Stress Studies</i>.
              </p>
            }
          />
          <SpeakerCard
            firstName="Catherine"
            lastName="Heilbronner"
            title="Comment faire face aux troubles du stress post-traumatique ?"
            description={
              <p>
                Alain est professeur à l'université McGill depuis 20 ans et membre de l’académie des sciences de la santé, au Canada.
                À la suite d’une expérience personnelle, il a eu envie d'aider les personnes ayant subi des chocs traumatiques.
                Cet intérêt lui a conduit à effectuer des recherches en neurosciences sur le rôle de la mémoire dans la persistance du traumatisme.
                Sur la base de ces travaux, une thérapie innovante a été proposée aux victimes du Bataclan et de Nice.
                En parallèle, il a également co-dirigé pendant quelques années le <i>Journal of Traumatic Stress</i> et <i>l'International Society for Traumatic Stress Studies</i>.
              </p>
            }
          />
        </SpeakerCardStack>
      </Section>


      <Section
        headline="Notre équipe"
        eyebrow="Découvrez notre équipe"
      >
        <TeamMember
          firstName="Noah"
          lastName="Delcourt"
          role="Président de la structure Confér'ENSEA"
        />
        
      </Section>


    </Layout>
  )
}
