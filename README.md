# Technical Test

I decided to write the technical test in React as I have recently been working with it through my coding bootcamp and thought it would lend well to this task. A recent project we worked on (a weather-app) helped me shape this tech test a great deal, as I felt that the structure of that project was quite similar to what I wanted to accomplish here.
<br>

## Overview

I broke up the Rewards Service into the following sections:

- **App.js** is the overall structure of the page - it holds everything within it.

  - **AccountNumberForm.js** is fed into App.js - this form contains a button that when pressed should display the rewards someone is eligible for (based on the account number input).
    - This would eventually be the state (when live data is passed in as it is changeable data based on user input).
  - **ChannelPortfolio.js** is fed into App.js. This is a list of all the channels. I was a little bit confused about the portfolio section - if it was just meant to be a list of all the channels or if it was a list of people to select which channels they had. Based on the fact that the account number was the thing that was being sent to the Eligibility Service (and presumably the account number would be associated with the channels the customer had) I interpreted the portfolio section to be a list of the channels.
  - **ChannelSubscriptions.js** - this contains the **IndividualChannels.js** information. I wasn't sure if this was the best way to structure it, but decided to go with this route. I was envisioning that this section of the page would be initially blank and would then pull in the Individual Channels, and associated rewards, based on the input of the account number (matching an account number in the data) and the submit button being clicked. In my eligibility.json file some of the values are empty strings, which I hoped would evaluate to false and therefore not render, though this didn't quite turn out how I was intending (hence the empty coloured boxes that are rendering on the main page). I would like to explore this further if I had more time.

    - **IndividualChannels.js** file contains the channel information associated with each account.

I initially mocked the data in the **eligibility.json** file in the **/src/data** section, which allowed me to pass data into the App and display it. However, I wasn't sure how to utilize this data with GET or fetch requests as I've always used a live API for that for the React projects I have completed.

I then tried to create a Mock-API (see **mock-api** section), which worked when I fired up Postman, but again, struggled to pull that data in. I believe I need a function that connects to the AccountNumberForm.js file and that activates once the submit button is clicked. I played around with this functionality for a while trialing some steps we took in the weather-app, but unfortunately was unable to find a solution.

I found this to be quite a challenging assignment and certainly was lesson for figuring out more about how things are passed to each other in React (and also how to structure mock data).

## If I had more time

- Some of my tests are not passing and while I believe I understand what the problem is to do with how I set up my mock data, I was not able to fix them in time.
- I would like to explore the possibility of adding more tests. I have testing in React to be a little challenging and would like to understand it better.
- Add more styling - I focussed more on trying to get the various components to work and because of that styling took a backseat.

<br>

## Acknowledgments

Thank you to the Manchester Codes Learning Platform - the information laid out for the weather-app project greatly helped me structure and write the code for this tech test. Thank you also to this blog (https://blog.harveydelaney.com/setting-up-a-mock-api-for-your-front-end-react-project/) for helping me set up a mock-api. Finally, thank you very much to everyone at Sky who I've had the pleasure to meet and interact with, and thank you for taking the time to review this test.
