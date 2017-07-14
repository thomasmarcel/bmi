class Calculator extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>
              User: {this.props.user.email}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <div className="form-group">
                <label className="sr-only" htmlFor="weight">Weight (in kg)</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="weight" placeholder="Weight" />
                  <div className="input-group-addon"> kg</div>
                </div>
              </div>&nbsp;
              <div className="form-group">
                <label className="sr-only" htmlFor="height">Height (in kg)</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="height" placeholder="Height" />
                  <div className="input-group-addon"> m</div>
                </div>
              </div>&nbsp;
              <button type="submit" className="btn btn-primary">Calculate</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  user: React.PropTypes.object
};

