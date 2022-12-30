import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import CodeBlock from '@theme/CodeBlock';
import KucCodeExample from '!!raw-loader!./kucCodeExample';

export default function HomepageFeatures() {
  const {
    siteConfig: {url, baseUrl},
  } = useDocusaurusContext();
  const domain = `${url}/${baseUrl}`;

  const useCaseSrc = `${domain}/img/usecase_button.png`;

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div class="usecase">
            <h2 align="center">Use Case</h2>
            <div class="usecase_sentense" align="center">
              <span>Kintone UI Component allows you to create Kintone-like components easily. This library is useful to build Kintone customization and plug-in.</span>
            </div>
            <div class="usecase_group">
              <h6>[ Sample code & the Button Component image ]</h6>
              <div class="usecase_image">
                <img src={useCaseSrc} alt="button usecase" />
              </div>
              <div class="usecase_code">
                <CodeBlock language="jsx">{KucCodeExample}</CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
