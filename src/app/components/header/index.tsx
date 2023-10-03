import s from './index.module.scss';
import Typography from '../atoms/typography';
import Logo from '../atoms/logo';



const Header = () => {
  return (
    <header className={s.root}>
        <nav className={s.nav}>
            <Logo />
         <div className={s.content}>
          {/* <img  src={phone} alt='phone icon' className={s.icon}/> */}
          <Typography size='text-s' weight='semibold' tag='a' href='tel:+17542751268'>
              754.275.1268
          </Typography>
         </div>
        </nav>
    </header>
  )
}

export default Header