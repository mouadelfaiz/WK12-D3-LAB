const React = require("react");

class Show extends React.Component {
  render() {
    const veg = this.props.vege;
    console.log({ name: this.props });
    return (
      <div>
        <h1>Show Page in the Vegetables</h1>
        The {veg.name} is {veg.color}
        {veg.readyToEat
          ? " Its is ready to eat"
          : " It is not ready to eat... Cant touch this"}
      </div>
    );
  }
}

module.exports = Show;
