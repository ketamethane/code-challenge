import { Box, Button, TextField, Autocomplete, Snackbar } from "@mui/material";
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [mode, setMode] = useState("light");
  
  // duplicates with different timings given

  const prices = [
    {"label":"BLUR", "price":0.20811525423728813},
    {"label":"bNEO","price":7.1282679},
   // {"label":"BUSD","price":0.999183113},
    {"label":"BUSD","price":0.9998782611186441},
    {"label":"USD","price":1},
    {"label":"ETH","price":1645.9337373737374},
    {"label":"GMX","price":36.345114372881355},
    {"label":"STEVMOS","price":0.07276706779661017},
    {"label":"LUNA","price":0.40955638983050846},
   {"label":"RATOM","price":10.250918915254237},
   {"label":"STRD","price":0.7386553389830508},
   {"label":"EVMOS","price":0.06246181355932203},
   {"label":"IBCX","price":41.26811355932203},
   {"label":"IRIS","price":0.0177095593220339},
   {"label":"ampLUNA","price":0.49548589830508477},
  {"label":"KUJI","price":0.675},
   {"label":"STOSMO","price":0.431318},
   {"label":"USDC","price":0.989832},
  {"label":"axlUSDC","price":0.989832},
  {"label":"ATOM","price":7.186657333333334},
  {"label":"STATOM","price":8.512162050847458},
  {"label":"OSMO","price":0.3772974333333333},
  {"label":"rSWTH","price":0.00408771},
  {"label":"STLUNA","price":0.44232210169491526},
  {"label":"LSI","price":67.69661525423729},
  {"label":"OKB","price":42.97562059322034},
  {"label":"OKT","price":13.561577966101694},
  {"label":"SWTH","price":0.004039850455012084},
  {"label":"USC","price":0.994},
  // {"label":"USDC","price":1},
  // {"label":"USDC","price":1},
  // {"label":"USDC","price":0.9998782611186441},
  {"label":"WBTC","price":26002.82202020202},
  {"label":"wstETH","price":1872.2579742372882},
  {"label":"YieldUSD","price":1.0290847966101695},
  {"label":"ZIL","price":0.01651813559322034}
];
  const [inputAmt, setInputAmt] = React.useState("");
  const [outputAmt, setOutputAmt] = React.useState("");

  const [value, setValue] = React.useState(prices[0].label);
  const [value2, setValue2] = React.useState(prices[0].label);
  const [inputValue, setInputValue] = React.useState("");
  const [outputValue, setOutputValue] = React.useState("");


  const [showValue, setShowValue] = React.useState(false);

  const handleOutputChange = (event) => {
    if (/^[0-9]+$/.test(inputAmt) && inputValue !== outputValue) {
      console.log("true");
      setOutputAmt(calculateExchange(inputAmt, inputValue, outputValue));
      setShowValue(true);
      return;
    }
    
    // Clear the displayValue and hide it when the user changes the input
    setShowValue(false);
  };


  // Access to fetch at 'https://interview.switcheo.com/prices.json' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

  // useEffect(() => {
  //   // Replace with the URL of the JSON file on the website
  //   const jsonFileUrl = 'https://interview.switcheo.com/prices.json';

  //   // Fetch the JSON data
  //   fetch(jsonFileUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPrices(data);
  //       // console.log(JSON.stringify(prices));
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching JSON:', error);
  //     });
  // }, []);

  const [open, setOpen] = React.useState(false);

  // Event handler for TextField's onChange event
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // /^\d+$/.test(str); to test for numbers in str

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const action = (
    <React.Fragment>
      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const calculateExchange = (inputAmt, inputValue, outputValue) => {
    const denominator = 0;
    for (let i=0; i<prices.length; i++) {
      if (prices[i].label === inputValue) {
        denominator = parseInt(prices[i].price);
      }
    }
    const numerator = 0;
    for (let i=0; i<prices.length; i++) {
      if (prices[i].label === outputValue) {
        numerator = parseInt(prices[i].price);
      }
    }

    const outputAmt = numerator/denominator * parseInt(inputAmt);
    return outputAmt;
  }
 
  return (

    <Box sx={{ bgcolor: 'white', height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', }}>
      <Box sx={{ width: 0.5, color: 'primary.light', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box sx={{ m: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <TextField 
          value={inputAmt}
          onChange={(event, inputAmt)=> {
            setInputAmt(inputAmt);
            handleOutputChange();
            console.log(inputAmt);
          }}
          id="standard-basic" label="Amount for exchange" variant="outlined" />
          <Autocomplete
            disablePortal
            value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleOutputChange();
        }}
        inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              handleOutputChange();
            }}
            id="controllable-states-demo"
            options={prices}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            sx={{ backgroundColor: 'white', width: 300 }}
            renderInput={(params) => <TextField {...params} label="currency" />}
          />

        </Box>
        <Box sx={{ m: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          amount you receive<br></br> 
          {outputAmt ? showValue === true: "-"}
          </Box>
          {/* <TextField 
          value={outputAmt}
          onChange={(event, outputAmt)=> {
            setOutputAmt(outputAmt)
          }}
          id="standard-basic" label="Amount you receive" variant="outlined" /> */}
          <Autocomplete
            disablePortal
            value={value2}
        onChange={(event, newValue) => {
          setValue2(newValue);
          handleOutputChange();
        }}
        inputValue={outputValue}
            onInputChange={(event, newInputValue) => {
              setOutputValue(newInputValue);
              handleOutputChange();
            }}
            id="controllable-states-demo"
            options={prices}
            isOptionEqualToValue={(option, value) => option.id === value.id}

            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="currency" />}
          />
        </Box>
        <Box sx={{ m: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Button variant="contained"
            sx={{ color: 'orange' }}
            onClick={handleClick}>Confirm the exchange!</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message='Exchange was a success!'
            action={action}
            ></Snackbar>
        </Box>
      </Box>
      <Box sx={{ width: 0.5 }}>
        <h1>Token Price (Token: Price)</h1>
         <ul>
          {prices.map((item, index) => (
            <li key={index}>
               {item.label}: {item.price}
            </li>
          ))}
         </ul>
      </Box>
    </Box>

  );
}

export default App;


//justifyContent: 'center', alignItems: 'center', alignContent: 'center'
{/* <ul>
          {prices.map((item, index) => (
            <li key={index}>
              {/* Render the dictionary items as needed */}
        //       {item.label}: {item.price}
        //     </li>
        //   ))}
        // </ul> */}