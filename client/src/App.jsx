import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Merchandise from "./pages/Merchandise";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Support from "./pages/Support";
import Diet from "./pages/DietPlans";
import Workout from "./pages/WorkoutPlans";
import ExpertAdvice from "./pages/ExpertAdvice";
import MembershipModal from "./pages/MembershipModal";
import FatToFitCourse from "./pages/FatToFitCourse"; // Adjust path as needed
import JoinUs from "./pages/JoinUs";
import Shop from "./pages/Shop";
import Postures from "./pages/Postures";
import Welcome from './pages/Welcome';
import PaymentConfirmation from './pages/PaymentConfirmation';
import YogaMeditation from './pages/YogaMeditation';
// import FitnessPlanner from './pages/FitnessPlanner';
// Adjust path as needed


const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Welcome} />
        <Route exact path="/home" component={Home} />
        <Route path="/merchandise" component={Merchandise} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/diet" component={Diet} />
        <Route path="/workout" component={Workout} />
        <Route path="/expert-advice" component={ExpertAdvice} />
        <Route path="/MembershipModal" component={MembershipModal} />
        <Route path="/support" component={Support} />
        <Route path="/FatToFitCourse" component={FatToFitCourse} />
        <Route path="/join-us" component={JoinUs} />
        <Route path="/shop" component={Shop} />
        <Route path="/postures" component={Postures} />
        <Route path="/payment-confirmation" component={PaymentConfirmation} />
        <Route path="/yoga-meditation" component={YogaMeditation} />
        {/* <Route path="/FitnessPlanner" component={FitnessPlanner} /> */}
      </Switch>
    </Router>
  );
};

export default App;
