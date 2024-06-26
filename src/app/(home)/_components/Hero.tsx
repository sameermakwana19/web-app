import Image from 'next/image';

import Button from '../../../components/ui/Button/Button';
import Typography from '../../../components/ui/Typography/Typography';

import illustrator from '../../../assets/ansopedia-illustrator.svg';
import style from './hero.module.scss';

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style['hero-background']} />
      <div className={style['hero-body']}>
        <div className={style['hero-content']}>
          <Typography variant="h1" className={style['hero-title']}>
            The Smartest Way to Learn{' '}
            <Typography variant="span" color="primary">
              Anything
            </Typography>
          </Typography>
          <Typography className={style['hero-description']}>
            The beautiful thing about learning is that no one can take it from you.
          </Typography>
          <div className={`${style['hero-image']} ${style['hero-image--mobile']}`}>
            <Image src={illustrator} alt="illustrator" />
          </div>
          <div className={style['hero-cta']}>
            <Button>Learn More</Button>
            <Button variant="outlined">Get Started</Button>
          </div>
        </div>
        <div className={`${style['hero-image']} ${style['hero-image--tablet']}`}>
          <Image src={illustrator} alt="illustrator" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
