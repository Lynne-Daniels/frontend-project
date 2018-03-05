# Starting Instructions - 

```git clone https://github.com/Lynne-Daniels/frontend-project.git
$cd frontend-project
$npm install

```

create a file named config.js in the twitter directory.  It needs to have the following info:

```const BEARER = {
  consumer_key: 'YOUR_KEY',
  consumer_secret: 'YOUR_SECRET',
  bearer_token: 'YOUR_BEARER_TOKEN'
};```

module.exports =  BEARER;


Navigate to the project directory
```$cd twizic-twittler```

Start the backend - 

```$ nodemon ./twitter/server.js localhost 3002```

Start the front end.
```$npm start```       

You can now view trizic-twittler in the browser.
 http://localhost:3000/




# Original Instructions Follow
# Use the Twitter API to make an @Trizic page

We at Trizic are interested in making a front-end with standards-compliant,
asyncronous, api-driven, beautious javascript. Your task is to do just that
with [ Twitter's REST API ]( https://dev.twitter.com/rest/public ).

Please complete **any** number of the steps below within **5 days** of us
sending you this document. You may put in as many hours as you wish, but we
recommend a maximum of around 5 hours. Use any framework and languages you
would like (React & EcmaScript 2015 encouraged) to complete the task.  Update
your forked repository with your solution and any steps needed to run it.

We are looking for code quality, knowledge of cross-browser compatibility,
quick load times, and innovation/thoughtfulness.

### Part I: Get it

Fork this repository.

Use the [ Twitter API ]( https://dev.twitter.com/overview/documentation ) to
fill the following areas on the page:

- The 30 most recent tweets from @Trizic
- The 30 most recent tweets from @laughingsquid.
- The 30 most recent tweets from @techcrunch.

(Check out the  [ User Timeline ](
https://dev.twitter.com/rest/reference/get/statuses/user_timeline ) API)

Each tweet should include at minimum:

- The tweet content
- A well-formatted `created_at` date
- A link to the tweet.
- For retweets and mentions, the username should be included.

**Bonuses/for fun**: Make the columns flexible for screen width so the columns
fill 100% of the page width. Layout could be as small as 320px wide. Column
arrangment is open-ended.


### Part II: Meta

Make an "edit layout" view that has a form to change the layout settings.

Use HTML5 LocalStorage to store and load the layout settings.

Configurable settings could possibly include:

- The order of the columns.
- The time range of the tweets shown.
- The number of tweets shown in each column.
- The overall palette/skin of the page.

The "edit layout" panel can appear either on the same page as the tweets page,
on its own page, or embedded within the tweets layout - whichever you would
like. There should be a straightforward way to toggle between edit and view
modes, and it should be clear to the user which mode they are currently in.

**Bonuses/for fun**: Implement any configurable settings you are inspired by or
would find useful for a page to view tweets. If appropriate for that setting,
use an interaction (like drag and drop) instead of a form field.
