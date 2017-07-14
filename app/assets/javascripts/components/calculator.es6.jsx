class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      weight: '',
      height: '',
      bmi: '',
      categories: [
        {
          category: 'Very severely underweight',
          from: 0,
          to: 15,
        },
        {
          category: 'Severely underweight',
          from: 15,
          to: 16,
        },
        {
          category: 'Underweight',
          from: 16,
          to: 18.5,
        },
        {
          category: 'Normal (healthy weight)',
          from: 18.5,
          to: 25,
        },
        {
          category: 'Overweight',
          from: 25,
          to: 30,
        },
        {
          category: 'Obese Class I (Moderately obese)',
          from: 30,
          to: 35,
        },
        {
          category: 'Obese Class II (Severely obese)',
          from: 35,
          to: 40,
        },
        {
          category: 'Obese Class III (Very severely obese)',
          from: 40,
          to: 99999,
        },
      ],
    }

    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleWeightChange(event) {
    this.setState({
      weight: event.target.value
    });
  }

  handleHeightChange(event) {
    this.setState({
      height: event.target.value
    });
  }

  calculateBMI() {
    if (this.state.height.length > 0 && this.state.weight.length > 0) {
      const weight = parseFloat(this.state.weight);
      const height = parseFloat(this.state.height);
      const calculated_bmi = weight / (height * height);

      this.setState({
        bmi: calculated_bmi.toFixed(2).toString()
      });
    }

    return false;
  }

  getCategory(bmi) {
    var result = null;
    for (var i = 0; i < this.state.categories.length; i++) {
      if (result === null && bmi >= this.state.categories[i].from && bmi <= this.state.categories[i].to) {
        result = this.state.categories[i];
      }
    }

    return result;
  }

  renderBMI() {
    if (this.state.bmi.length > 0) {
      const category = this.getCategory(parseFloat(this.state.bmi));
      return (
        <div>
          <h2>{category.category} <span>(index {this.state.bmi})</span></h2>
        </div>
      );
    } else {
      return (
        <div>
          <b>Fill the form and press calculate</b>
        </div>
      );
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.calculateBMI();
  }

  renderForm() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label className="sr-only" htmlFor="weight">Weight (in kg)</label>
          <div className="input-group">
            <input type="number" step="0.1" className="form-control" id="weight" placeholder="Weight" value={this.state.weight} onChange={this.handleWeightChange} />
            <div className="input-group-addon"> kg</div>
          </div>
        </div>&nbsp;
        <div className="form-group">
          <label className="sr-only" htmlFor="height">Height (in kg)</label>
          <div className="input-group">
            <input type="number" step="0.1" className="form-control" id="height" placeholder="Height" value={this.state.height} onChange={this.handleHeightChange} />
            <div className="input-group-addon"> m</div>
          </div>
        </div>&nbsp;
        <button type="submit" className="btn btn-primary">Calculate</button>
      </form>
    );
  }

  render () {
    if (!this.state.user) {
        return (
          <div className="react-loading text-center">
            <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
            <span className="sr-only">Loading...</span>
          </div>
        );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Body Mass Index Calculator</h1>
            <div>
              User: {this.state.user.email}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.renderForm()}
            <p>
              <i>The weight is in kilograms, and the height in meters, e.g. 65kg, 1.70m</i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.renderBMI()}
          </div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  user: React.PropTypes.object
};

