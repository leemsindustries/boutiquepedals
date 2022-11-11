import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What\'s this now?',
    Svg: require('@site/static/img/pedal.svg').default,
    description: (
      <>
        There are so many fantastic boutique pedal companies in the world that it's sometimes difficult to keep track of them all
      </>
    ),
  },
  {
    title: 'By builders for you!',
    Svg: require('@site/static/img/builders.svg').default,
    description: (
      <>
        This directory is authored by pedal makers to make your pedal search easier.
      </>
    ),
  },
  {
    title: 'What makes a pedal \"Boutique\"',
    Svg: require('@site/static/img/storefront.svg').default,
    description: (
      <>
       Let's try not to worry about that too much. There are lots of thoughts and opinions about what is and what isn't a boutique pedal but none of that matters. What does matter is checking out sick pedals!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
