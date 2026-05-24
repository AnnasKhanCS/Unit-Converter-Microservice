## Unit Converter Microservice

### Description
Microservice that converts weight and volume quantities between different units via REST API. 

Supported weight units: g, kg, oz, lbs

Supported volume units: mL, L, tsp, tbsp, cups


### How to request data
Send HTTP GET request to api with the following required query parameters embedded in the request: input_amount, input_unit, output_unit

Javascript Example:

```
//Example Req for converting 2lbs to oz
cosnt response = await fetch('https://localhost:3001/api?input_amount=2&input_unit=lbs&output_unit=oz');
const data = await response.json();

```

### How to receive data
Returns a JSON object with converted_amount and output_unit

Example Response in Javascript: 
```
Example Res for converting 2lb to oz

{
    "converted_amount": 32,
    "output_unit": "oz"
}

```

### UML Sequence Diagram

![alt text](image.png)


