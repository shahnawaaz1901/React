import styles from "./myOrders.module.css";
function MyOrders() {
  return (
    <div className={styles.ordersContainer}>
      <div className={styles.orderHeading}>
        <h1>Your Orders</h1>
      </div>
      <div className={styles.orderListContainer}>
        <div className={styles.order}>
          <h2 className={styles.orderDate}>Ordered On :- Jan 24, 2024</h2>
        </div>
      </div>
    </div>
  );
}
export default MyOrders;
