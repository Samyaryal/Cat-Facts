
export default fetchData = (num = 5) => {
  fetch(
    `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${num}`
  )
    .then(res => res.json())
    .then(
      json => {
        this.setState({
          isLoaded: true,
          facts: json
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
};
