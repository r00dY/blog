import styles from './index.css';

import withStyles from '../withStyles';

import Test from '../components/Test/Test';

function Index() {
    return (
        <div>
            <h1 className={styles.root}>Welcome to next.js!</h1>
            <Test />
        </div>
    );
}

export default withStyles(styles)(Index);