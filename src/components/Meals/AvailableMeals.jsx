import { useState, useEffect } from 'react';
import Card from '../UI/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    const [sushi, setSushi] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchSushi = async () => {
            setIsLoading(true);
            const response = await fetch(
                'https://rolls-5f2a1-default-rtdb.europe-west1.firebasedatabase.app/sushi.json'
            );

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedSushi = [];

            for (const key in responseData) {
                loadedSushi.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setSushi(loadedSushi);
            setIsLoading(false);
        };

        fetchSushi().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <p>Loading...</p>
            </div>
        );
    }

    if (httpError) {
        return (
            <div className={styles.error}>
                <p>{httpError}</p>
            </div>
        );
    }

    const sushiList = sushi.map((roll) => (
        <MealItem
            id={roll.id}
            key={roll.id}
            name={roll.name}
            description={roll.description}
            price={roll.price}
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
