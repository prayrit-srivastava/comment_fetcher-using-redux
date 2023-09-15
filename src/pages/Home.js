import { useEffect } from "react";
import { List } from "../components/List";
import { useDispatch } from "react-redux";
import { action } from "../redux/reducers/commentsReducer";
// import comments actions here

export const Home = () => {
  const dispatch = useDispatch();
  const getComments = async () => {

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
        dispatch(action.sucess(data));
      // dispatch fetch success action here
    } catch (e) {
      dispatch(action.error(e))
      // dispatch fetch error action here
    }
  };

  useEffect(() => {
    // dispatch fetch start action here
    dispatch(action.loading());
    getComments();
    dispatch(action.loading());
    // execute the getComments function here
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
