import React, { useEffect } from "react";
import HomeItem from "./HomeItem";
import { fetchMenu, addItem } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menu);

  const addItemToCart = (item) => {
    if (item.quantity) {
      dispatch(addItem(item));
    }
  };

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  return menus ? (
    <>
      <header className="tc ph4">
        <h1 className="f3 f2-m f1-l fw2 black-70 mv3">Menu</h1>
      </header>
      <div className="cf">
        {menus.map((menu) => (
          <div key={menu._id} className="fl w-100 w-50-ns w-50-m w-50-l">
            <HomeItem menu={menu} addItem={addItemToCart} />
          </div>
        ))}
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Home;
