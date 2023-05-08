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
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout home noNameImage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* section with heading */}
      <section className={utilStyles.headingMd}>
        <Typography variant="h4" component="h1" gutterBottom id="heading">
          Revolutionize Education with AI
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom id="desc2">
          Empower Classrooms with Easy Daily Management!
        </Typography>
        {/* Box with two columns */}
        {[{
          title: "The Future of AI",
          description: "Investigate how AI-powered agile and lean methodologies are transforming education by offering more customized, adaptive, and effective learning experiences. It is essential for school administrators to embrace these methods in order to remain competitive and address the evolving needs of students. Our blog articles emphasize the significant influence of AI-supported agile and lean strategies on learning results, student involvement, and the optimization of resources, radically altering the conventional education system.",
          button: "Our Blogs",
          buttonId: "button-0",
          link: "/posts",
          image: "/images/ai1.jpeg",
          reversed: false
        },
        {
          title: "What is MyWebClass.org",
          description: "At mywebclass.org, our focus is on educating educators about incorporating Artificial Intelligence (AI) in the classroom. Our goal is to assist schools and teachers in enhancing their students' opportunities by harnessing the potential of AI. We provide an array of resources aimed at teaching educators about AI fundamentals, its practical uses in the classroom, and ways to integrate it into their instructional techniques. Our team of knowledgeable instructors is dedicated to delivering top-notch education and assistance, empowering teachers to confidently introduce AI in their classrooms. Join us on this thrilling adventure toward a more inventive and all-encompassing future for education.",
          button: "To Know Us",
          buttonId: "button-1",
          link: "/about",
          image: "/images/ai2.jpeg",
          reversed: true
        }].map((item, index) => (
          <Box sx={{ display: 'flex', flexDirection: item.reversed ? "row-reverse" : "row", justifyContent: 'space-between', my: 2 }}>
            <Box sx={{ width: '50%', p: 1 }}>
              <Typography variant="h4" component="h3" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {item.description}
              </Typography>
              <Button variant="contained" color="primary" href={item.link} id={item.buttonId}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(item.link, undefined, { locale });
                }}
              >
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
