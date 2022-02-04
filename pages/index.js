import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GlobalNav from '../components/globalnav'

function GlobalFooter() {
  return <p className='mt-24 text-center'>Copyright © 2018-2022 TEDxENSEA. Tous droits réservés.</p>
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
    <header
      className='py-[170px] bg-fixed bg-cover bg-top text-center bg-[#EB2E15]'
      style={{
          backgroundImage: `url(/images/header.png`,
        }}
      >
      <Container>
        <p className='mt-3 text-2xl font-medium'>
          {props.eyebrow}
        </p>

        <h1 className='mt-4 text-6xl font-black cursor-default select-none'>
          <span className='bg-clip-text text-transparent bg-gradient-to-br from-slate-50 to-slate-200'>
            {props.headline}
          </span>
        </h1>

        <p className='mt-6 text-xl font-normal'>
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
              <a className='rounded-full bg-none border-2 border-slate-50 text-slate-50 inline-block px-4 py-2 hover:bg-slate-50 hover:text-red-800'>
                {props.ctaP}
              </a>
            </Link>
          </li>
          <li className='pt-2'>
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
    <section id={props.id} className='pt-[170px]'>
      <Container>

        <h2 className='mt-[-44px] text-5xl sm:mt-[-3px] sm:text-6xl lg:mt-[44px] lg:text-7xl text-[#A1A1A6] font-bold'>
          {props.eyebrow}
        </h2>

        <p className='mt-[-4px] lg:mt-[-2px] text-5xl sm:text-6xl lg:text-7xl text-=[#fff] font-bold max-w-[300px] md:max-w-xl lg:max-w-[75%] lg:basis-[75%]'>
          {props.headline}
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
    this.state = {isToggleOn: false};

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
              {this.props.title}s
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
    <div className='grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {children}
    </div>
  )
}

function TeamMember(props) {
  return (
    <div className='group max-w-sm transition ease-in-out hover:scale-[1.007]'>
      <div className='rounded-full overflow-hidden'>
        <div
          className='aspect-square bg-cover bg-center drop-shadow-xl  group-hover:sepia group-hover:blur-sm'
          style={{
            backgroundImage: `url(/images/team/${props.firstName}-${props.lastName}.jpg)`,
          }}></div>
      </div>
      <figcaption className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  invisible group-hover:visible text-center'>
        <div className='text-xl font-bold'>
          {props.firstName} {props.lastName}
        </div>
        <div className='text-md font-medium mt-2'>
          {props.role}
        </div>
      </figcaption>
    </div>
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
        ctaP_url="https://ted-x-ensea.herokuapp.com/checkout"
        ctaS="Voir les speakers"
        ctaS_url="#speakers"
      />


      <Section
        eyebrow="Notre événement"
        headline="Ouvert à tous, susceptible d&apos;intéresser n&apos;importe qui, peu importe son âge, niveau d&apos;étude ou domaine de travail."
        id="event"
      >
        <p className='text=[#A1A1A6] text-2xl font-medium max-w-[300px] md:max-w-xl lg:max-w-[75%] lg:basis-[75%]'>
        Le thème &quot;ESCAPE&quot; a été choisi dans la lignée des deux précédentes éditions du TEDxENSEA (&quot;Bring Down the Walls&quot; et &quot;Explore New Paths&quot;), avec la volonté d'amener les gens à reconsidérer leur façon de penser et remettre en question ce qu'ils prenaient pour acquis.
        </p>
        <p className='text=[#A1A1A6] text-2xl font-medium max-w-[300px] md:max-w-xl lg:max-w-[75%] lg:basis-[75%] mt-4'>
        Et, c&apos;est également pour répondre à cette idée que nous avons soigneusement sélectionné nos 7 speakers.
        </p>
      </Section>


      

    </Layout>
  )
}
