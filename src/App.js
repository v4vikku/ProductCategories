import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect, Route } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";
import ProductDetail from "./Components/productDetail";
import Products from "./Components/products";
import { getAllCategories } from "./redux/actions/categories";
import { getAllProducts } from "./redux/actions/products";

const App = () => {
  const [catergoyID, setCategoryID] = useState("all");
  const handleChange = (e, { value }) => {
    setCategoryID(value)
  }
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.categories);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories())
  }, [dispatch])
  return (
    <div>
      <Menu size="large" inverted>
        <Menu.Item
          name="Product Category" ></Menu.Item>
          <Menu.Item name="Filter By:" icon="filter"  position="right">
             
            </Menu.Item>
                <Menu.Menu>
        <Dropdown item value={catergoyID} onChange={handleChange} style={{ margin: "0px" }} selection options={[{
          key: "all",
          value: "all",
          text: "All Products"

        }, ..._.map(categories, (v) => {
          return {
            key: v.id,
            text: v.name,
            value: v.id
          }
        })]} />
      </Menu.Menu>
      </Menu>

      <Switch>
        <Route path="/" exact component={() => <Redirect to="/products" />} />
        <Route path="/products" exact component={() => <Products products={catergoyID === "all" ? products : _.filter(products, (v) => {
          return v.categoryId === catergoyID
        })} />} />
        <Route path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
