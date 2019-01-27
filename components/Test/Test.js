import styles from './Test.css';
import withStyles from "../../withStyles";

const Test = () => (
    <div className={styles.Test}>
        Test
    </div>
);


export default withStyles(styles)(Test);