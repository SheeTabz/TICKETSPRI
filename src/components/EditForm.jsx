const [route, setRoute] = useState('');

const handleChange = event => {
  setRoute(event.target.value);
  alert(event.target.value)
}
