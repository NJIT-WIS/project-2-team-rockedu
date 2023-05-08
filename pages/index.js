import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Box, Button, Typography } from '@mui/material'
import ResponsiveAppBar from '../components/header'
import MailChipForm from '../components/mailchimp-form'
import { useRouter } from 'next/router'

export default function Home({ allPostsData }) {
  const router = useRouter()
  const { locale } = router

  return (
    <Layout home noNameImage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* section with heading */}
      <section className={utilStyles.headingMd}>
        <Typography variant="h4" component="h1" gutterBottom>
          Revolutionize Education
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Empower Your Classroom with Easy Daily Management!
        </Typography>
        {/* Box with two columns */}
        {[{
          title: "The Future",
          description: "Explore how AI-driven agile and lean methodologies are reshaping education by making learning more personalized, adaptive, and efficient. We argue that school administrators need to adopt these approaches to stay competitive and meet the changing needs of students. Our Blog posts highlight the positive impact of AI-enhanced agile and lean approaches on learning outcomes, engagement, and resource utilization, revolutionizing the traditional education system.",
          button: "Go to Blogs",
          link: "/posts",
          image: "/images/ai.jpg",
          reversed: false
        },
        {
          title: "Storytellers",
          description: "At mywebclass.org, we are dedicated to educating teachers about the use of Artificial Intelligence (AI) in the classroom. Our mission is to help schools and educators provide better opportunities for their students by leveraging the power of AI. We offer a range of resources that are designed to help teachers learn about the fundamentals of AI, its applications in the classroom, and how it can be integrated into their teaching methods. Our team of experienced instructors are committed to providing high-quality education and support to help teachers feel confident and equipped to bring AI into their classrooms. Join us in this exciting journey towards a more innovative and inclusive future for education.",
          button: "Go to About Us",
          link: "/about",
          image: "/images/ai.jpg",
          reversed: true
        }].map((item, index) => (
          <Box
            key={item.link}
            sx={{ display: 'flex', flexDirection: item.reversed ? "row-reverse" : "row", justifyContent: 'space-between', my: 2 }}>
            <Box sx={{ width: '50%', p: 1 }}>
              <Typography variant="h4" component="h3" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {item.description}
              </Typography>
              <Button variant="contained" color="primary" href={item.link} onClick={(e) => {
                e.preventDefault();
                router.push(item.link, undefined, { locale })
              }}>
                {item.button}
              </Button>
            </Box>
            <Box sx={{ width: '50%', p: 1 }}>
              {/* Box with blue bg */}
              <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, borderRadius: 1, height: "100%" }}>
              </Box>
            </Box>
          </Box>))}
        <MailChipForm />
      </section>

      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
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
