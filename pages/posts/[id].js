import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout noNameImage>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        {/* Show a ribbon if noLocaleVersionFound is true */}
        {postData.noLocaleVersionFound && <div className={utilStyles.lightText}>
          <span className={utilStyles.lightText}>This post is not available in your language, showing the default version</span>
        </div>}

        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        {postData.date && <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params, ...rest }) {
  // Locale
  const { locale } = rest

  const postData = await getPostData(params.id, locale)
  return {
    props: {
      postData
    }
  }
}
