# README

This repository contains information regarding dataset which is used for training and evaluating XGBoost models using different features: one for predicting total generation and another for predicting total consumption.

## Files:
1. **total_generation_prediction.py**: Trains an XGBoost model to predict total generation based on given features. Includes functions for loading the dataset, calculating MAPE, training the model, evaluating using RMSE, MAE, and MAPE, and plotting actual vs predicted values.
- Features Used: DayOfWeek, Month, HourOfDay,Gb(i),Gd (i), Gr (i), Temperature (c), relative_humidity_2m (%), dew_point_2m (¬∞C), precipitation (mm), cloud_cover (%), wind_speed_10m (km/h), Total_Generation (addition of ABR-SG-001, C-SG-001, ISTM-SG-001)
2. **total_consumption_prediction.py**: Similar to the previous script, predicts total consumption based on provided features.
- Features Used: Features Used: DayOfWeek, Month, HourOfDay, Temperature (c), relative_humidity_2m (%), dew_point_2m (¬∞C), precipitation (mm), cloud_cover (%), wind_speed_10m (km/h), Total_Consumption (addition of ABR-LD-001, C-LD-001, ISTM-LD-001 )

## Features Description:
- **Date_Timestamp**: Date and time of the data record.
- **DayOfWeek**: Day of the week.
- **Month**: Month of the year.
- **HourOfDay**: Hour of the day.
- **ABR-LD-001**: Consumption meter data for building ABR(Building-1).
- **C-LD-001**: Consumption meter data for building C(Building-22).
- **ISTM-LD-001**: Consumption meter data for building ISTM(Building-3).
- **ABR-SG-001**: Solar Generation meter data for ABR(Building-1).
- **C-SG-001**: Solar Generation meter data for C(Building-2).
- **ISTM-SG-001**: Solar Generation meter data for ISTM(Building-3).
- **Gb(i)**: Beam (direct) irradiance on the inclined plane (plane of the array) (W/m2).
- **Gd(i)**: Diffuse irradiance on the inclined plane (plane of the array) (W/m2).
- **Gr(i)**: Reflected irradiance on the inclined plane (plane of the array) (W/m2).
- **Temperature (c)**: Temperature in Celsius.
- **relative_humidity_2m (%)**: Relative humidity at 2 meters above ground level.
- **dew_point_2m (¬∞C)**: Dew point temperature at 2 meters above ground level.
- **precipitation (mm)**: Precipitation in millimeters.
- **cloud_cover (%)**: Cloud cover percentage.
- **wind_speed_10m (km/h)**: Wind speed at 10 meters above ground level.
- **Total_Consumption**: Total consumption for all three buildings.
- **Total_Generation**: Total generation for all three buildings.


## Dependencies:
- pandas
- numpy
- scikit-learn (GridSearchCV, train_test_split)
- xgboost
- matplotlib

## Usage:
1. Install dependencies:
   ```bash
   pip install pandas numpy scikit-learn xgboost matplotlib
