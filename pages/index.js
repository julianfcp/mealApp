import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { setInfo, getMeals, searchMeal } from "../redux/actions/main";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { Input, Space, Modal, Button, List, Card, Row, Col } from "antd";
import RecipeDetails from "../src/components/RecipeDetails";

const { Meta } = Card;
const { Search } = Input;

function Home(props) {
  const { name, meals, isLoading } = props;
  const [newName, setName] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const showModal = (id) => {
    console.log("id: ", id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchMeal(newName));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <p>Enter a Name {name}:</p>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={(value) => {
              setName(value);
            }}
            allowClear
            style={{ width: 200 }}
          />
        </Space>
      </form>
      <br></br>
      {/* {isLoading ? (
        "cargando... "
      ) : (
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={meals.data.meals}
          renderItem={(item) => (
            <List.Item>
              <Card
                key={item.idMeal}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={item.strMealThumb} />}
              >
                <Meta title={item.strMeal} description={item.strTags} />
              </Card>
            </List.Item>
          )}
        />
      )} */}

      {isLoading ? (
        "Loading... "
      ) : meals.data ? (
        <Row gutter={16} className={styles.container}>
          {meals.data.meals
            ? meals.data.meals.map((item) => (
                <Col xs={{ span: 4 }} lg={{ span: 5 }} key={item.idMeal}>
                  <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={item.strMealThumb} />}
                    onClick={() => showModal(item.idMeal)}
                  >
                    <Meta title={item.strMeal} description={item.strTags} />
                  </Card>
                </Col>
              ))
            : " Not found .."}
        </Row>
      ) : (
        ""
      )}

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <RecipeDetails />
      </Modal>
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
