# Expense Tracker App

This repository contains the source code for an Expenses Tracking app built with React Native.

## App Flow

The app consists of the following screens:

1. Welcome Screen: This is the initial screen where the user can enter their full name.
2. Home Screen: This screen displays the user's full name in the navigation top bar title and shows a list of expenses sectioned by dates. The expenses can be filtered by title, amount, or date.
3. Create / Edit Expense Modal: This modal allows the user to create a new expense or edit an existing expense. The expense must have a title, amount, and date.
4. Expenses Filters Modal: This modal enables the user to filter the expenses by any field such as title, amount, or date. The user can also clear all active filters.
5. Profile Screen: This screen displays the total number of expense items and provides an option to sign out, which deletes all data.

## Project Structure

The project structure is organized as follows:

- `src/assets`: Contains static images.
- `src/components`: Contains reusable components used throughout the app.
- `src/constants`: Contains constant values used in the app.
- `src/model`: Contains the data models for expenses.
- `src/screens`: Contains the individual screens of the app.
- `src/storage`: Contains the logic for data persistence using Realm for expenses and AsyncStorage for configuration.
- `src/utils`: Contains utility functions used throughout the app.
- `App.tsx`: The entry point of the app.

## Tech Stack

The app utilizes the following technologies and libraries:

- React Native CLI: The project is created using the React Native CLI, written in TypeScript.
- Realm: Used for storing and managing the expenses data.
- AsyncStorage: Used for storing configuration data such as the user's name and filter values.
- React Navigation: Used for navigation between screens and implementing the bottom tab layout.

## Known Issues

Please be aware of the following known issues in the app:

1. iOS Compatibility: The app has not been tested on iOS due to the unavailability of a Mac. It may have UI issues on iOS.
2. Validation: There are no validations implemented for buttons, so users can "create" expenses without entering data or log in without providing a username.
3. TextField Issues: The custom TextField component used in the app may have some issues with the animated label.
4. Currency Mask: The currency mask for the amount field is not foolproof and can be manipulated.
5. Big Numbers Sum Issue: There is an issue with summing large numbers, resulting in displaying infinity.
6. Translucent Screen Issue: There is a jump when navigating from a screen with translucent mode to a screen without translucent mode due to a navigation configuration issue.

## Video Demonstration
https://drive.google.com/file/d/1Fu0nnuki3rq0_00PRqs0liR1PIa5ud2b/view?usp=sharing
