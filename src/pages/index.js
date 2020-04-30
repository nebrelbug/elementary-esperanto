import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './index.module.css'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const snippets = [
  {
    label: 'Ease of learning',
    content: (
      <div>
        <ul>
          <li>
            One study, conducted by Columbia University, found that “it is
            possible for the average student to{' '}
            <b>
              understand written and spoken Esperanto in 20 hours better than he
              can understand French, German, Italian, or Spanish after 100 hours
            </b>
            ”
          </li>
          <br />
          <li>
            According to Richardson, “Experiments in some English schools have
            shown that{' '}
            <b>
              the average student there can learn as much Esperanto in six
              months as he can French in four years.
            </b>
            ”
          </li>
          <li>
            Esperanto has a regular grammar. This makes it easier to identify
            grammatical concepts and leads to an easy and intuitive grasp of the
            language.
          </li>
        </ul>
      </div>
    )
  },
  {
    label: 'Teaching Value',
    content: (
      <div>
        <ul>
          <li>
            Numerous experiments have shown that learning Esperanto before
            learning another language drastically increases their ability to
            learn other languages. In one experiment, students were given one
            year of instruction in Esperanto, followed by three years in French.
            When compared with students who had taken French for all four years,
            the Esperanto-speaking students were at an equal or higher level.
          </li>
          <br />
          <li>
            There are numerous free, credible teaching resources for Esperanto,
            that don't require teachers to be knowledgeable in Esperanto.
          </li>
        </ul>
      </div>
    )
  },
  {
    label: 'Cognitive Benefits',
    content: (
      <div>
        <ul>
          <li>
            Learning foreign languages has been shown to improve language
            comprehension and academic performance.
          </li>
          <li>
            Students who learn a second language score, on average, higher on
            standardized tests.
          </li>
        </ul>
      </div>
    )
  }
]

function Snippet({ label, content }) {
  return <div className={styles.configSnippet}>{content} </div>
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='The case for teaching Esperanto in US elementary schools'
      keywords={[
        'esperanto',
        'young language learning',
        'elementary school language'
      ]}
    >
      <header className={classnames('hero', styles.heroBanner)}>
        <div className='container'>
          <div className='row'>
            <div className={classnames('col')}>
              <h1 className='hero__title'>{siteConfig.title}</h1>
              <p className='hero__subtitle'>
                The case for teaching Esperanto in US elementary schools
              </p>

              <div className={styles.buttons + ' ' + styles.buttonDiv}>
                <Link
                  className={classnames(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted
                  )}
                  to={useBaseUrl('esperanto')}
                >
                  What's Esperanto?
                </Link>
              </div>
              <div className={styles.buttons + ' ' + styles.buttonDiv}>
                <Link
                  className={classnames(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted
                  )}
                  to={useBaseUrl('research')}
                >
                  The Research
                </Link>
              </div>
              <div className={styles.buttons + ' ' + styles.buttonDiv}>
                <Link
                  className={classnames(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted
                  )}
                  to={useBaseUrl('resources')}
                >
                  Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='container'>
          <div className='row'>
            <div className={classnames(`${styles.pitch} col col--6`)}>
              <h2>What can Esperanto do for my school?</h2>

              <p>
                There is a plethora of research on the benefits of teaching
                Esperanto in public schools. Here are some possible benefits:
              </p>
              <ul>
                <li>Decreased stigma in students about language learning</li>
                <li>Much faster acquisition of additional languages</li>
                <li>A deeper grasp of grammatical concepts</li>
                <li>Increased emotional intelligence</li>
                <li>Better overall academic performance</li>
                <li>
                  Teaching curriculums exist for Esperanto that do not require
                  the teacher knows Esperanto
                </li>
              </ul>
            </div>
            <div className={classnames(`${styles.pitch} col col--6`)}>
              <h2>Quick Facts</h2>
              {snippets && snippets.length && (
                <section className={styles.configSnippets}>
                  <Tabs
                    defaultValue={snippets[0].label}
                    values={snippets.map((props, idx) => {
                      return { label: props.label, value: props.label }
                    })}
                  >
                    {snippets.map((props, idx) => (
                      <TabItem key={idx} value={props.label}>
                        <Snippet {...props} />
                      </TabItem>
                    ))}
                  </Tabs>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
