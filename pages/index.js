import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GlobalNav from '../components/globalnav'

function GlobalFooter() {
  return <p className='mt-24 mb-4 text-center text-sm'>Copyright © 2018-2022 TEDxENSEA - An independently organized TEDx event operated under license from TED.</p>
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
          <span className='block font-medium'>
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
    <div className='grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
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
              {this.props.title}
            </div>
          </figcaption>

          
          {bottom}

        </div>
        
      </figure>
    );
  }
}

function Pole(props) {
  return (
    <div
      className='p-6 mt-8 rounded-[30px] flex flex-col box-border'
      style={{
        background: `linear-gradient(to bottom, #061420 0%, #151516 100%)`,
      }}
    >
      <header>
        <h3 className='mb-2 text-xl font-semibold'>
          {props.name}
        </h3>
        <p className='mt-4 text-base font-semibold'>
          {props.description}
        </p>
      </header>
      <div className='mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center justify-items-center'>
        {props.children}
      </div>
    </div>
  )
}

function TeamMember(props) {

  const lastNameArray = props.lastName.split(' ');
  const prefixLastName = lastNameArray[0];

  console.log(prefixLastName)

  return (
    <div className='group max-w-sm transition ease-in-out hover:scale-[1.007] w-full'>
      <div className='rounded-full overflow-hidden'>
        <div
          className='aspect-square bg-cover bg-center drop-shadow-xl  group-hover:grayscale group-hover:blur-sm'
          style={{
            backgroundImage: `url(/images/team/${props.firstName}-${prefixLastName}.jpg)`,
          }}></div>
      </div>
      <figcaption className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  invisible group-hover:visible text-center'>
        <div className='text-xl font-bold cursor-default'>
          {props.firstName} {props.lastName}
        </div>
        <div className='text-md font-medium mt-2 cursor-default'>
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
        date="Samedi 5 février 2022 (14h - 19h)"
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
          Le thème &quot;ESCAPE&quot; a été choisi dans la lignée des deux précédentes éditions du TEDxENSEA (&quot;Bring Down the Walls&quot; et &quot;Explore New Paths&quot;), avec la volonté d&apos;amener les gens à reconsidérer leur façon de penser et remettre en question ce qu&apos;ils prenaient pour acquis.
        </p>
        <p className='text=[#A1A1A6] text-3xl font-bold max-w-[300px] md:max-w-xl lg:max-w-[75%] lg:basis-[75%] mt-8'>
          Le Samedi 5 février 2022 (14h - 19h) à l&apos;Auditorium de l&apos;IPSL.
        </p>
      </Section>

      <Section
        eyebrow="Nos speakers"
        headline="Une thématique, ESCAPE. Un objectif, tous vous faire voyager à travers leurs prises de parole."
        id="speakers"
      >

        <p className='text=[#A1A1A6] text-2xl font-medium max-w-[300px] md:max-w-xl lg:max-w-[75%] lg:basis-[75%]'>
        Chaque intervenant vient dans le seul objectif de diffuser des idées qui lui sont chères, et qui en valent la peine !
        </p>

        <SpeakerCardStack>
          <SpeakerCard
            firstName="Alain"
            lastName="Brunet"
            title="Survivre au trouble du stress post-traumatique"
            description="À la suite d&apos;une expérience personnelle, j&apos;ai eu envie d'aider les personnes ayant subi des chocs traumatiques. Cet intérêt m&apos;a conduit à effectuer des recherches en neurosciences sur le rôle de la mémoire dans la persistance du traumatisme. Sur la base de ces travaux, une thérapie innovante a été proposée aux victimes du Bataclan et de Nice. En parallèle, j&apos;ai aussi codirigé pendant quelques années le Journal of Traumatic Stress et l&apos;International Society for Traumatic Stress Studies. Je suis professeur à l&apos;université McGill depuis 20 ans et membre de l’académie des sciences de la santé, au Canada."
          />
          <SpeakerCard
            firstName="Catherine"
            lastName="Heilbronner"
            title="Du bégaiement à la parole libre"
            description="Après avoir démarré par le théâtre, j&apos;ai passé 25 ans en entreprise dans la communication, la vente et les RH avant de créer ma société, Adlevo, dédiée au développement de l&apos;Humain dans son relationnel, son comportement et sa communication avec les autres. Passionnée par la prise de parole et l&apos;efficacité relationnelle, qui sont indissociables pour moi, je suis spécialisée dans l&apos;art du Pitch et la valorisation de soi ou de son projet à travers l&apos;éloquence, la posture, la capacité à être soi avec authenticité, à capter son auditoire avec Sourire, Enthousiasme et Conviction."
          />
          <SpeakerCard
            firstName="Dominique"
            lastName="Sciamma"
            title="S&apos;échapper pour s’engager"
            description="Titulaire d&apos;une Maîtrise de mathématiques, d&apos;une maîtrise et d&apos;un DEA en informatique théorique, et après une carrière éclectique au sein d&apos;entreprises internationales, Dominique Sciamma crée la première école de design dans une université (rentrée septembre 2021), après avoir dirigé Strate école de design pendant 7 ans jusqu'en septembre 2020. Avant de diriger Strate, il a successivement créé et dirigé son département &quot;Systèmes et Objets Intelligents&quot; et son activité de recherche. Surfant toujours sur les nouvelles technologies, il a successivement travaillé comme chercheur en IA, développeur de logiciels, directeur marketing, responsable d'une business unit IA à Singapour, consultant en stratégie (pour Bull), responsable d&apos;une équipe de résolution de problèmes complexes, marketing multimédia (pour EDS), éditeur électronique (pour le journal La Tribune), auteur multimédia, auteur de CMS (en tant que consultant numérique indépendant), avant de s&apos;investir avec passion dans la pédagogie du design dès 1998. Figure marquante de l&apos;écosystème du design en France, Dominique Sciamma est un promoteur déterminé du design transformateur, par ses actions, ses paroles et ses écrits. En tant que président de l&apos;APCI, la principale association française de promotion du design, il a joué un rôle très actif dans les Assises Nationales du Design (2019) pour la mise en place d&apos;une politique nationale du design. Il est membre du Conseil National du Design."
          />
          <SpeakerCard
            firstName="Esther"
            lastName="Ziegler"
            title="Le violoncelle, une vibration de l&apos;âme"
            description="Titulaire d&apos;une Maîtrise de mathématiques, d&apos;une maîtrise et d&apos;un DEA en informatique théorique, et après une carrière éclectique au sein d'entreprises internationales, Dominique crée la première école de design dans une université en septembre 2021, après avoir dirigé Strate école de design pendant 7 ans jusqu'en septembre 2020. Surfant toujours sur les nouvelles technologies, il a longtemps travaillé dans ce domaine, avant de s&apos;investir avec passion dans la pédagogie du design dès 1998. Figure marquante de l&apos;écosystème du design en France, Dominique est un promoteur déterminé du design transformateur par ses actions, ses paroles et ses écrits. En tant que président de l'APCI, la principale association française de promotion du design, il a joué un rôle très actif dans les Assises Nationales du Design, pour la mise en place d&apos;une politique nationale dans ce domaine. Il est de plus membre du Conseil National du Design."
          />
          <SpeakerCard
            firstName="Julia"
            lastName="Voisin"
            title="Avons-nous besoin d&apos;un mentor?"
            description="Julia Voisin souhaite utiliser la parole, l&apos;écriture et le dessin au service de messages optimistes et engagés. Après un Bachelor à King&apos;s College London et deux ans d&apos;expérience dans le marché de l&apos;art, elle a continué ses études avec un Master en droit et histoire de l&apos;art à l&apos;Université Paris I Panthéon-Sorbonne. En devenant présidente de l&apos;AMMA, l&apos;association de son Master 2, elle a pris conscience du rôle des mentors, de ce qu'ils nous transmettent mais aussi de l'importance de s&apos;en affranchir pour s&apos;affirmer et s&apos;épanouir."
          />
          <SpeakerCard
            firstName="Laurent"
            lastName="Veyet"
            title="Pourquoi les insectes ne sont-ils toujours pas dans nos assiettes en 2022?"
            description="En Europe, Laurent est le premier chef à avoir ouvert un restaurant où insectes et légumes de saison cohabitent dans l&apos;assiette. Les insectes ne sont pas son premier défi. En 1996, il avait lancé sa société de chef à domicile, Chef Service, une première en France, à l&apos;époque. Avec Inoveat, il se retrouve encore précurseur et fidèle à ses convictions : cuisine éco-responsable, saine et locale."
          />
          <SpeakerCard
            firstName="Nassim"
            lastName="Larfa"
            title="Faire vivre l&apos;ambition face au(x) choix"
            description="Actuellement dans les couloirs d&apos;un ministère, je partage ma vie entre la passion pour les politiques publiques, les engagements associatifs en faveur des jeunes et le terrain de football. Bien que ce dernier point, Diplômé de l&apos;école des affaires publiques de Sciences Po Paris, Promotion 2018, j&apos;ai eu à cœur durant l&apos;ensemble de mon cursus de m&apos;engager dans le milieu associatif. Ainsi, j&apos;ai été Président d&apos;une association (Ambition Campus) où nous avons accompagné chaque année une centaine de lycéens et lycéennes durant leur année de Terminale ; aussi bien à travers de la préparation aux concours qu&apos;en les aidant à préparer leur orientation. Résolument convaincu de l&apos;intérêt de lutter contre les phénomènes d&apos;inégalités scolaires - s&apos;illustrant entre autres par l&apos;autocensure- je continue à intervenir régulièrement auprès de différents publics afin de mettre en place des stratégies pour leur permettre de réaliser des choix pertinents en matière d&apos;orientation scolaire. Aujourd’hui, les inégalités persistent et les choix d&apos;orientation restent encore trop souvent subis, pourtant plusieurs possibilités s&apos;offrent à ces lycéens pour faire un choix construit et désirable ; c&apos;est l’objet de ce talk."
          />

        </SpeakerCardStack>
          
      </Section>

      <Section
        eyebrow="Notre équipe"
        headline="Etudiants ingénieurs de l'Ecole Nationale Supérieure de l'Electronique et de ses Applications."
        id="team"
      >

        <Pole
          name="Bureau"
          description=""
        >
          <TeamMember
            firstName="Noah"
            lastName="Delcourt"
            role=""
          />
          <TeamMember
            firstName="Alix"
            lastName="Havret"
            role=""
          />
          <TeamMember
            firstName="Anne"
            lastName="Couapel"
            role=""
          />
          <TeamMember
            firstName="Adrien"
            lastName="Lenoir"
            role=""
          />
        </Pole>

        <Pole
          name="Le pôle speakers"
          description="Recrutement et suivi des conférenciers qui viendront à l&apos;événement."
        >
          <TeamMember
            firstName="Kaouding"
            lastName="Savane"
            role=""
          />
          <TeamMember
            firstName="Judeson"
            lastName="Anthony Fernando"
            role=""
          />
          <TeamMember
            firstName="Karl"
            lastName="Lubbos"
            role=""
          />
          <TeamMember
            firstName="Nina"
            lastName="Van"
            role=""
          />
          <TeamMember
            firstName="Bryan"
            lastName="Guerineau"
            role=""
          />
          <TeamMember
            firstName="Michaela"
            lastName="Dimitrova"
            role=""
          />
        </Pole>
        <Pole
          name="Le pôle logistique"
          description="Organisation de l&apos;évènement, choix des prestataires techniques."
        >
          <TeamMember
            firstName="Alicia"
            lastName="Cande"
            role=""
          />
          <TeamMember
            firstName="Hugo"
            lastName="Claudel"
            role=""
          />
          <TeamMember
            firstName="Coco"
            lastName="Huet"
            role=""
          />
          <TeamMember
            firstName="Julie"
            lastName="Mercier"
            role=""
          />
          <TeamMember
            firstName="Othmane"
            lastName="Cherai"
            role=""
          />
          <TeamMember
            firstName="Jimmy"
            lastName="Pan"
            role=""
          />
          <TeamMember
            firstName="Franck"
            lastName="Schmitt"
            role=""
          />
        </Pole>
        <Pole
          name="Le pôle communication"
          description="Mise en place du plan de communication avant, pendant et après le TEDx, prise de contact avec les radios et journaux locaux pour davantage de visibilité."
        >
          <TeamMember
            firstName="Adam"
            lastName="Cheikh Brahim"
            role=""
          />
          <TeamMember
            firstName="Zacharie"
            lastName="Rodiere"
            role=""
          />
          <TeamMember
            firstName="Romain"
            lastName="Joalland"
            role=""
          />
        </Pole>
        <Pole
          name="Le pôle partenariat"
          description="Recherche et suivi des sponsors."
        >
          <TeamMember
            firstName="Hardy"
            lastName="Londou Laodjassondo"
            role=""
          />
        </Pole>
        <Pole
          name="Développement web"
          description=""
        >
          <TeamMember
            firstName="Jathurchan"
            lastName="Selvakumar"
            role=""
          />
          <TeamMember
            firstName="Mohammed"
            lastName="Guitni"
            role=""
          />
        </Pole>

      </Section>

    </Layout>
  )
}
