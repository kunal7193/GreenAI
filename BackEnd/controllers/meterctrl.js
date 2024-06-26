const express = require('express');

const User = require('../model/User');
const { response } = require('../index.js');
const { MeterServices } = require('../services/meterservices.js');
const router = express.Router();

router.post('/addMeterdetails', async (req, res) => {
  //const data = req.body;
  //console.log('here.....');
  let data = req.body;
  const response = {};
  try {
    console.log(data);
    let result = await MeterServices.addMeterdetails(data);
    console.log(result);
    if (result) {
      response.success = true;
      response.meter = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'some error occured...';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});


//router.delete('/deleteMeter', async (req, res) => { 
//router.delete('/deleteMeter:id', async (req, res) => { 
  router.delete('/deleteMeter/:id', async (req, res) => {
    let data = req.params;
    const { id } = req.params; 
    console.log(`Received ID: ${id}`);  
    //const data = req.query;
    console.log(data)
    console.log('here.....');
    //let data = req.body;
  const response = {};
  try {
    let result = await MeterServices.deleteMeter(data);
    if (result.oldMeter.deletedCount == 1) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'no record found with given Id';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

/*router.put('/updateMeter/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const response = {};

  //let data = req.params;
   // const { id } = req.params; 
    console.log(`Received ID: ${id}`);  
    console.log("Updated Data:", updatedData); // Log the updated data values

    //const data = req.query;
    console.log(data)
    console.log('here.....');

  try {
    let result = await MeterServices.updateMeter(id, data);
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'cannot update ';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});
*/
router.put('/updateMeter/:id', async (req, res) => {
  const { id } = req.params; // Extract the ID from URL params
  const updatedData = req.body; // Extract all other updated values from request body
  const response = {};

  console.log(`Received ID: ${id}`);  
  console.log("Updated Data:", updatedData); // Log the updated data values

  try {
    let result = await MeterServices.updateMeter(id, updatedData); // Pass the updatedData to your service method
    if (result) {
      response.success = true;
      response.user = result;
      response.status = '200';
      res.status(200).send(response);
    } else {
      response.success = false;
      response.error = 'Cannot update meter';
      response.status = '400';
      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';
    res.status(500).send(response);
  }
});

router.get('/getMeterDetails', async (req, res) => {
  const data = req.body;
  const response = {};
  try {
    let result = await MeterServices.getMeterdetails(data);
    console.log(data) // Yukta
    //console.log("In meterctrl.js getMeterdetails")

    if (result) {
      response.success = true;
      response.meter = result;
      response.status = '200';

      res.status(200).send(result);
    } else {
      response.success = false;
      response.error = 'Invalid User Id';
      response.status = '400';

      res.status(400).send(response);
    }
  } catch (e) {
    console.log(e);
    response.success = false;
    response.error = 'Some error occurred. Please try again later';
    response.status = '500';

    res.status(500).send(response);
  }
});


router.get('/getLast30DaysMeterData', async (req, res) => {
  try {
    // Call the static method getLast30DaysMeterData from MeterServices
    const last30DaysData = await MeterServices.getLast30DaysMeterData();
    // Send the fetched data as JSON response
    res.json(last30DaysData);
  } catch (error) {
    // Handle errors
    console.error('Error fetching last 30 days meter data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;