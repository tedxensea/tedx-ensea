
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/layout'
import GlobalNav from '../../components/globalnav'
import Header from '../../components/header'

import Section from '../../components/section'
import Speaker from '../../components/speaker'


export default function Event2022() {
    return (
        <Layout>
            <Head>
                <title>Edition 2022 - Escape</title>
            </Head>
            <GlobalNav />
            <Header
                edition="2022"
                title="Escape"
                description="Le thème 'ESCAPE' a été choisi dans la lignée des deux précédentes éditions du TEDxENSEA ('Bring Down the Walls' et 'Explore New Paths'), avec la volonté d'amener les gens à reconsidérer leur façon de penser et remettre en question ce qu'ils prenaient pour acquis.
                C'est avec cet état d'esprit que nous avons voulu organiser un événement ouvert à tous, susceptible d'intéresser n'importe qui, peu importe son âge, niveau d'étude ou domaine de travail, et c'est également pour répondre à cette idée que nous avons soigneusement sélectionné nos 7 speakers."
            />

            <Section
                title="Speakers"
                description="Nos Speakers"
            >
                <Speaker
                firstName="Alain"
                lastName="Brunet"
                description="Staff Engineer, Algolia"
                text="sdfadsf"
                />
                <Speaker
                    firstName="Catherine"
                    lastName="Heilbronner"
                    description="Staff Engineer, Algolia"
                    text="fadsfsd"
                />
            </Section>
            
        </Layout>
    )

}