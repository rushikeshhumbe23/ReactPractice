import styles from  './Greetings.module.css'

function Greetings(){

    console.log(styles)
    return (
        <>
            <h1>Rushikesh Balasaheb Humbe</h1>
            <h3 className={styles.App}>Learning the new concepts of reactjs</h3>
        </>
    )
}

export default Greetings;