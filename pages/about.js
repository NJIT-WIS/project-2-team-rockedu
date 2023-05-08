import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home noNameImage>
      <Head>
        <title>{`${siteTitle} | About`}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <div
          dangerouslySetInnerHTML={
            {
              __html: `
          <div style="display:flex;">
          <div style="flex:1;">
            <img src="images/ldapimage.png" alt="Alt text" style="border-radius:60%; width:130px; height:130px; object-fit:cover;margin-bottom:30px;" />
          </div>

          <div style="flex:1;">
            <ul>
              <li><b>Name:</b> Keith Williams</li>
              <li><b>Designation:</b> Professor at NJIT</li>
              <li>15+ years of Industry and Teaching Experience</li>
            </ul>
          </div>
        </div>

        <div style="display:flex;">
          <div style="flex:1;">
            <img src="images/varshith.jpeg" alt="Alt text" style="border-radius:60%; width:130px; height:130px; object-fit:cover;margin-bottom:30px;" />
          </div>
          <div style="flex:1;">
            <ul>
              <li><b>Name:</b> Varshith Reddy Regatte</li>
              <li><b>Designation:</b> Student at NJIT</li>
              <li>Fresh Graduate from NJIT expertise in Data Science field.</li>
            </ul>
          </div>
        </div>


        <div style="display:flex;">
          <div style="flex:1;">
            <img src="images/nandini.jpeg" alt="Alt text" style="border-radius:60%; width:130px; height:130px; object-fit:cover;margin-bottom:30px;" />
          </div>
          <div style="flex:1;">
            <ul>
              <li><b>Name:</b> Nandini Palwai</li>
              <li><b>Designation:</b> Student at NJIT</li>
              <li>Fresh Graduate from NJIT expertise in Data Science field.</li>
            </ul>
          </div>
        </div>


        <div style="display:flex;">
          <div style="flex:1;">
            <img src="images/ramya.jpeg" alt="Alt text" style="border-radius:60%; width:130px; height:130px; object-fit:cover;margin-bottom:30px;" />
          </div>
          <div style="flex:1;">
            <ul>
              <li><b>Name:</b> Ramya Kammari</li>
              <li><b>Designation:</b> Student at NJIT</li>
              <li>Fresh Graduate from NJIT expertise in Information Systems.</li>
            </ul>
          </div>
        </div>`
            }
          }
        ></div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
