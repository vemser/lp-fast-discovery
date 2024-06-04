import styles from './materialGrid.module.css';
import CardMaterials from './CardMaterials';


export default function MaterialGrid() {
    return(
        <>
       <div className={styles.container}>
      <div className={styles.row}>
        <div className={`${styles.div} ${styles.textCard}`}>
          <p>Texto aqui</p>
        </div>
        <div className={`${styles.div} ${styles.imageCard}`} />
        <div className={`${styles.div} ${styles.thirdCard}`} />
      </div>
      <div className={styles.row}>
        <div className={`${styles.div} ${styles.firstRowTwo}`} />
        <div className={`${styles.div} ${styles.imageCard}`} />
        <div className={`${styles.div} ${styles.thirdCardRowTwo}`} />
      </div>
      <div className={styles.row}>
        <div className={`${styles.div} ${styles.imageCardRowThree}`} />
        <div className={`${styles.div} ${styles.secondRowThree}`} />
        <div className={`${styles.div} ${styles.thirdRowThree}`} />
      </div>
    </div>
        
        </>

    );
}