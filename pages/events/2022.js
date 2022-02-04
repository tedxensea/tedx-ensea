
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
                description=""
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