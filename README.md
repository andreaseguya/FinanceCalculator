Finance Calculator

The income estimator was built as a resource in aiding investment management and determining the feasibility of a business idea.
The application has  3 main components; the questionnaire, calculators and the loan tool. Each of these provide recommendations based on user data entered and aid in determining the feasibility of a business idea.
The calculators use HTML forms to collect values and compute financial terms such as Net Present Value of an investment.
The data from these forms is then passed into a Javascript function that computes the values and provides recommendationas based on results

Running locally:

1. Install Node.js 18 or later.
2. Run `npm install` in the project directory.
3. Run `npm start` and open the local URL printed by Vite.

Production deployment:

1. On a build machine or CI runner with Node.js installed, run `npm install` and `npm run build`.
2. Deploy the generated `dist` directory to your static web host.
3. Configure the host to serve `index.html` as the site entry point.

The production web host only needs to serve the static files in `dist`; Node.js and npm are not required there. To test the production build locally, run `npm run preview` after building.

For Vercel, import this repository as a project and use the repository root as the project root. The included `vercel.json` builds the static site and deploys `dist` on each deployment.

NPV calculator: enter a positive initial investment, the annual discount rate as a percentage, and each year's expected net cash flow. Add or remove years as needed. Cash flows are assumed to occur at each year-end; the initial investment is treated as a time-zero outflow. Positive NPV means the projected return exceeds the selected discount-rate hurdle.

Tools Used:
• HTML
• CSS
• JavaScript
• Node.js and npm
• Vite
• React
• FinanceJS

Stages of Development:
The first step is to compare and research other resources that aid in investment management.
 Some interesting ideas were a stock simulator game, a mock investment portfolio application and individual NPV, IRR, BCR calculators.
 The next stage involves designing the overall layout of the application,implementing functionality and testing the protoype.
Prototyping tools such as figma were used to speed up the development of front end elements
Libraries such as FinanceJS and StockJS aided in the back-end development of the application.
