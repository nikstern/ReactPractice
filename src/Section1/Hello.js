export class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.to} </h1>
        <aside>From {this.props.from}</aside>
      </div>
    );
  }
}
