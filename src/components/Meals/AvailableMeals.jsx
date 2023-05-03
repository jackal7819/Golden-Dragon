import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Philadelphia roll',
        description:
            'A Philadelphia roll is a makizushi type of sushi generally made with smoked salmon, cream cheese, and cucumber, with the rice on the outside.',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'California roll',
        description:
            'California roll is an uramaki containing crab, avocado, and cucumber.',
        price: 19.56,
    },
    {
        id: 'm3',
        name: 'Dragon roll',
        description:
            'Dragon roll is a type of sushi. But what makes it unique is the layer of unagi or eel that is wrapped around it.',
        price: 32.99,
    },
    {
        id: 'm4',
        name: 'Alaska roll',
        description:
            'Alaska roll is a kind of sushi roll, but with a few unique twists. While the fillings are the same, the exterior has layers of salmon sashimi on top, along with some tobiko. ',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const sushiList = DUMMY_MEALS.map((sushi) => (
        <MealItem
            key={sushi.id}
            name={sushi.name}
            description={sushi.description}
        />
    ));

    return (
        <section className={styles.meals}>
            <Card>
                <ul>{sushiList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
