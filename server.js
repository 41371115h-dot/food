const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
//設定proxy server

app.post('/gemini', async (req, res) => {
    //呼叫google scripts
    const response = await fetch("https://script.google.com/macros/s/AKfycbw3phQ-cP-rSU9C9OboG8zHU10jOeSw9JRpuqHHu7-SuNB1eUefflwOSO1n2HA4Z1mV/exec", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(req.body)
    })
    const data = await response.text();
    console.log(data)
    res.json(JSON.parse(data)); //回傳JSON資料
});

//設定localhost在哪個port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
