import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { Avatar, Box, Button, Typography } from '@mui/material'
import MailChipForm from '../../components/mailchimp-form'

export default function Home({ allPostsData }) {
  return (
    <Layout home noNameImage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* section with heading */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Typography variant="h3" sx={{ color: 'text.primary', mb: 4 }}>
          <span className={utilStyles.lightText}>Welcome to the blogs</span>
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', mb: 4 }}>
          {allPostsData.map(({ id, date, title, image, author, authorImage, description }) => (
            <Box key={id}>
              <Box className={utilStyles.listItem} key={id}>
                {image && <img src={image} alt={title} />}
                <Box className={utilStyles.lightText} sx={{
                  display: 'flex',
                  my: 1,
                }} component={"small"}>
                  {author && <Avatar alt={author} src={authorImage} sx={{ width: 24, height: 24, mr: 1 }} />}
                  {author && <span className={utilStyles.authorName}>{author}</span>} &nbsp; | &nbsp;
                  <Date dateString={date} />
                </Box>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {/* <ul className={utilStyles.list}>
          {[allPostsData[0]].map(({ id, date, title, image }) => (
            <li className={utilStyles.listItem} key={id}>
              {image && <img src={image} alt={title} />}
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
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
