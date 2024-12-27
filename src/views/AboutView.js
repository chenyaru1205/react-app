import logo from '../logo.svg';

function AboutView() {
  return (
    <div className="about-view">
      <header className="about-view-header">
        <p>【react-app】This is an about page</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default AboutView;