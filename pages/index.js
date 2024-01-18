import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi! My name is Peter and I am a 3rd year student studying BSIT at University of the Assumption. Let's connect!</p>

        <h3>My Expectations in this Subject are:</h3>
        <ul>
          <li>To learn a lot especially in the backend part of this subject.</li>
          <li>To show my skills during activities and exams.</li>
          <li>To have a great time while learning.</li>
        </ul>

        <h3>10 things that requires Zero Talent</h3>
        <ol>
          <li>Being On Time</li>
          <li>Making An Effort</li>
          <li>Being High Energy</li>
          <li>Having A Positive Attitude</li>
          <li>Being Passionate</li>
          <li>Using Good Body Language</li>
          <li>Being Coachable</li>
          <li>Doing A Little Extra</li>
          <li>Being Prepared</li>
          <li>Having A Strong Work Ethic</li>
        </ol>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}