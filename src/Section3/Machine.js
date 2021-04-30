export class Machine extends React.Component {
  render() {
    let msg;
    let { s1, s2, s3 } = this.props;
    if (s1 === s2 && s2 === s3) {
      msg = "win";
    } else {
      msg = "lose";
    }

    return (
      <div>
        <p>
          {s1} {s2} {s3}{" "}
        </p>
        <p> You {msg}!</p>
      </div>
    );
  }
}
