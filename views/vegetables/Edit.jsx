const React = require("react");
const DefaultLayout = require("../layout/Default.jsx");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Vegetable Edit Page">
        <form
          action={`/vegetables/${this.props.vegie._id}?_method=PUT`}
          method="POST"
        >
          Name:{" "}
          <input type="text" name="name" defaultValue={this.props.vegie.name} />
          <br />
          Color:{" "}
          <input
            type="text"
            name="color"
            defaultValue={this.props.vegie.color}
          />
          <br />
          Is Ready To Eat:
          {this.props.vegie.readyToEat ? (
            <input type="checkbox" name="readyToEat" defaultChecked />
          ) : (
            <input type="checkbox" name="readyToEat" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
