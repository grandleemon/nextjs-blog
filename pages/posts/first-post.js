import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <Image src="/images/profile.jpg" width="200px" height="200px">

            </Image>
            <Link href="/">
                <a>Go to Homepage</a>
            </Link>

            <style jsx>{`
                a {
                    font-size: 20px;
                }
            `} 
            </style>
        </Layout>

    )
}