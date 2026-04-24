body {
  background: #f9f7fe;
  font-family: "Roboto", sans-serif;
}

.weather-app {
  background: white;
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 30px 50px rgba(65, 50, 100, 0.08);
}

header {
  border-bottom: 1px solid #f9f7fe;
  padding-bottom: 30px;
}

form {
  display: flex;
  gap: 10px;
}

input[type="search"] {
  background-color: #f9f7fe;
  border: none;
  padding: 20px;
  width: 75%;
  border-radius: 6px;
  font-size: 16px;
}

input[type="submit"] {
  background-color: #885df1;
  color: white;
  border: none;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

main {
  padding: 30px 0;
}

#current-city {
  font-size: 38px;
  font-weight: 900;
  margin: 0;
}

#current-date {
  color: rgba(39, 33, 66, 0.4);
  display: block;
  margin-bottom: 10px;
}

#temperature {
  font-size: 60px;
  font-weight: bold;
}

footer {
  border-top: 1px solid #f9f7fe;
  text-align: center;
  padding-top: 15px;
  color: rgba(39, 33, 66, 0.4);
}

a {
  color: #885df1;
}
