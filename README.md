# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

I was given the starter code for this project from Lighthouse Labs and then I build upon it to practice my HTML, CSS, JS, jQuery and AJAX front-end skills, also Node and Express back-end skills. Please see commit history for more details. 

As a bonus touch, I incorporated my real Twitter username [@TheLearnaholic](https://twitter.com/thelearnaholic) in the project. Follow me (for real!) if you're interested in my web development bootcamp journey and beyond.

## Final Product
1. The Tweeter app is responsive where the user profile becomes a part of the header when the screen size is under 1024px. This also shows the functionality where the tweet form can be toggled to show or hide when the "Write a new tweet" button is clicked.
![Responsive Design](docs/tweet-responsive.gif)

2. The tweet submission form includes error handling and form validation where if there's nothing in the textarea or if it exceeds 140 character limit, the user is shown an error feedback. Otherwise, the tweet will post successfully!
![Tweets with error handling](docs/tweet-errors.gif)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md-5
