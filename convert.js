//create conversion table
//base unit for weight: g
//base unit for volume: ml


const CONVERSION_TABLE = {
    //weight conversions w/ gram as base
    g:      {category: 'weight', toBase: 1},
    kg:     {category: 'weight', toBase: 1000},
    oz:     {category: 'weight', toBase: 28.3495},
    lbs:    {category: 'weight', toBase: 453.592},
    //volume conversions w/ ml as base
    ml:     {category: 'volume', toBase: 1},
    l:      {category: 'volume', toBase: 1000},
    tsp:    {category: 'volume', toBase: 4.9289},
    tbsp:   {category: 'volume', toBase: 14.7868},
    cups:   {category: 'volume', toBase: 236.588}
}

function convert(input_amount, input_unit, output_unit){
    const amount = parseFloat(input_amount);
    if (isNaN(amount)) throw Error('ERROR: Invalid input amount, needs to be number');
    
    //look up from and to units in conversion table
    const from = CONVERSION_TABLE[input_unit];
    const to = CONVERSION_TABLE[output_unit];

    //if input or output units not found in table, throw error
    if (!from) throw new Error(`Invalid input unit: "${input_unit}"`);
    if (!to) throw new Error(`Error: Invalid output unit: "${output_unit}"`);

    if (from.category !== to.category) throw new Error(`Error: Not possible to convert ${from.category} to ${to.category}`);

    //Convert units
    const converted_amount = parseFloat(((amount * from.toBase) / to.toBase).toFixed(2));

    return {converted_amount, output_unit}

}

module.exports = {convert, CONVERSION_TABLE}