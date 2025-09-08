import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/author.jpg"
          alt="An image showing author"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello</h1>
      <p>I like to blog</p>
    </section>
  );
}
