import s from './Loader.module.css';
import { Grid } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className={s.loader}>
            <Grid height="80" width="80" color='#3f51b5' ariaLabel='loading' />
        </div>
    )
};

export default Loader;