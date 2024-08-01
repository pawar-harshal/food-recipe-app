import FoodItem from "./FoodItem";
import styles from "./FoodList.module.css";

export default function FoodList({ setfoodId, foodData, foodId }) {
  return (
    <div className={styles.outer}>
      {foodData.map((food) => (
        <div key={food.id} className={styles.inneritem}>
          <FoodItem setfoodId={setfoodId} foodId={foodId} food={food} />
        </div>
      ))}
    </div>
  );
}
