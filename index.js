const express = require('express');
const {convert} = require('./convert');
const cors = require('cors');

const app = express();
const PORT = 3001;


app.use(express.json());
app.use(cors());

//Get Request
app.get('/api', (req, res) => {

    const {input_amount, input_unit, output_unit} = req.query;

    //Throw error if not all inputs present
    if (!input_amount || !input_unit || !output_unit ){
        return res.status(400).json({error: 'Missing parameter'});
    }

    try {
        const result = convert(input_amount, input_unit, output_unit);
        return res.json(result)
    } catch (err) {
        return res.status(400).json({error: err.message});
    }

});

app.listen(PORT, () => {
    console.log(`Unit Converter MS Running on http://localhost:${PORT}`)
})

