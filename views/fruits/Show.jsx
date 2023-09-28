const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const fruit = this.props.fruits;

    return (
      <DefaultLayout title={"Fruits Show Page"}>
        <h1>Show Page in the Fruits</h1>
        The {fruit.name} is {fruit.color}
        {fruit.readyToEat
          ? " Its is ready to eat"
          : " It is not ready to eat... Cant touch this"}
      </DefaultLayout>
    );
  }
}

module.exports = Show;
