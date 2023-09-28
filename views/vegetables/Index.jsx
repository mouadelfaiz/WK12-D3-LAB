const React = require("react");
const DefaultLayout = require("../layouts/Default");

class Index extends React.Component {
  render() {
    const { vegies } = this.props;
    console.log(vegies);
    return (
      <DefaultLayout title={"Vegetables Index Page"}>
        <nav>
          <a href="/vegetables/new">Add a new Fruit</a>
        </nav>
        <ul>
          {vegies.map((vegie, i) => {
            return (
              <li key={i}>
                The <a href={`/vegetables/${vegie._id}`}>{vegie.name}</a> is{" "}
                {vegie.color} <br></br>
                {vegie.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
                <form
                  action={`/vegetables/${vegie._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
                <a href={`/vegetables/${vegie._id}/edit`}>Edit This Vegie</a>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
