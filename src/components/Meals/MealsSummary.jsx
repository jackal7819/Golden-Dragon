import styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>Delicious Sushi, Delivered To You</h2>
            <p>
                Choose your favorite sushi from our broad selection of available
                meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our sushi are cooked with high-quality ingredients,
                just-in-time and of course by experienced chefs!
            </p>
        </section>
    );
};

export default MealsSummary;
