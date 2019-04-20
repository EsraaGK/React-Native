import { createStackNavigator, createAppContainer } from "react-navigation";
import News from "./News";
import SingleNews from "./SingleNews";



const AppNavigator = createStackNavigator({
  News: News,
  SingleNews:SingleNews
});

export default createAppContainer(AppNavigator);