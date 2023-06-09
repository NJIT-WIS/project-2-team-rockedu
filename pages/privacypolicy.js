import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function PrivacyPolicy({ allPostsData }) {
  return (
    <Layout home noNameImage>
      <Head>
        <title>{`${siteTitle} | Privacy Policy`}</title>
      </Head>
      <section className={utilStyles.headingMd}>

        <div
          dangerouslySetInnerHTML={
            {
              __html: `
              <h1 id="privacy">Privacy</h1>
              <p>Here is our Privacy &amp; Cookie Policy, which outlines numerous legal aspects. Our primary goal is to always prioritize your well-being as a user on our platform.</p>
              <h2 id="copyright-policy">Copyright Policy</h2>
              <p>At MyWebClass, we are dedicated to safeguarding your privacy. This policy details how we gather, utilize, and secure your personal data when using our website.</p>
              <h2 id="data-we-collect-">Data We Collect:</h2>
              <p>While visiting our website, we might collect the following personal information from you:</p>
              <ul>
              <li>Your full name</li>
              <li>Email address</li>
              <li>Browsing behavior</li>
              </ul>
              <p>Additionally, we might gather data about your device, such as your IP address and browser type.</p>
              <h2 id="usage-of-your-information">Usage of Your Information</h2>
              <p>We may use your personal data for purposes like:</p>
              <ul>
              <li>Delivering requested services and products</li>
              <li>Communicating with you about our offerings</li>
              <li>Enhancing our website and services</li>
              <li>Meeting legal requirements</li>
              </ul>
              <p>With your consent, we might also use your data for marketing purposes, such as sending newsletters or promotional deals. We do not sell, rent, or trade your personal data with third parties. However, we may disclose your information to third-party providers who help us deliver our services and products.</p>
              <h2 id="cookies-">Cookies:</h2>
              <p>We employ cookies to tailor content and ads, offer social media functionalities, and assess our traffic. We also share data about your use of our site with social media, advertising, and analytics partners, including Google Analytics, who may merge it with other information you&#39;ve provided or that they&#39;ve obtained from your use of their services. By continuing to use our website, you consent to our use of cookies.</p>
              <h2 id="google-analytics">Google Analytics</h2>
              <p>To analyze user interactions with our website, we use Google Analytics. The tool employs cookies to gather standard internet log information and visitor behavior data anonymously. The data generated by the cookie about your website usage (including IP address) is sent to Google, which then uses it to assess visitor interactions and compile statistical reports on website activity for us.</p>
              <h2 id="security-precautions">Security Precautions</h2>
              <p>We implement reasonable measures to protect your personal data from unauthorized access, usage, or disclosure. However, we cannot guarantee the complete security of your information, as no online transmission method is entirely secure.</p>
              <h2 id="accessibility-guidelines">Accessibility Guidelines</h2>
              <p>We strive to make our website accessible to everyone, including individuals with disabilities. Our aim is to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.</p>
              <h2 id="your-rights">Your Rights</h2>
              <p>You reserve the right to access, modify, or delete your personal data. You can also withdraw consent to receive marketing communications from us at any time. To exercise these rights, please contact us using the information provided below.</p>
              <h2 id="policy-updates">Policy Updates</h2>
              <p>We may revise this privacy policy occasionally. Any changes will be posted on this page, and the date at the top of the page will reflect the most recent update.</p>
              <h2 id="get-in-touch">Get in Touch</h2>
              <p>If you have any questions or concerns about our privacy policy or the management of your personal data, please contact us at NJIT.edu.</p>`
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
