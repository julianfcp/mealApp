import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { setInfo, getMeals } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";

function Home(props) {
  const { name, meals, isLoading } = props;
  const [newName, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <p>Enter a Name {name}:</p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => dispatch(setInfo(newName))}>Submit</button>
      <br></br>
      {isLoading ? (
        "cargando... "
      ) : meals.data ? (
        <ul>
          {meals.data.meals.map((item) => (
            <li key={item.idMeal}>{item.strMeal}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.main.name,
    meals: state.main.meals,
    isLoading: state.main.isLoading,
  };
};
// not working with promises
const mapDispatchToProps = {
  setInfo,
};

export default connect(mapStateToProps, null)(Home);
