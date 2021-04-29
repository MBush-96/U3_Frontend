# U3_Frontend

### OVERVIEW

Users can login/create an account. Allowing them to make a post, comment, like, or dislike a post. Users have a score that keeps track of how many time their posts or comments have been liked. Users can follow different sub rooms (sub reddits) to see posts from those communities in their feed. Otherwise they will receive the basic random feed.

### WIREFRAMES

Home page<br />
<img src=https://i.imgur.com/mk35yp6.jpg />

User clicked on post <br />
<img src=https://i.imgur.com/6mLxPiC.jpg />

User profile<br />
<img src=https://i.imgur.com/9keUQku.jpg />

User went to a specific subreddits home<br />
<img src=https://i.imgur.com/8ivWmsF.jpg />

ERD
<img src=https://i.imgur.com/MvyS4Z6.jpg />


### User Stories

-When I load the website I see a list of posts as well as a search bar. Aswell as a login/signup button if im logged out, or a profile/logout buttons if im logged in.<br />
-When I click on a post the post will take up the whole browser screen and display its comments.<br />
-When I type into the search bar for a sub reddit it and go to its page. All of its post a displayed in the middle with subreddit information on the right side, and make a post on the left.<br />
-While in a subreddits home I can click the make a post button, and a window popsup for me. Where I can make a post there is a empt box for Title of post, and a empty box for the body of the post.<br />
-When I submit a post it is added to the subreddits home.<br />
-I can follow a subreddit and see its feed in my home now no matter if it has very little likes.<br />
-I can create and account and login.<br />
-I can logout.<br />
-In my profile page I see a list of my previos posts and comments. I can also see my profile stats and change my settings.<br />

### Routes

|Routes|Desc|
|-------|------|
|/user/signup|Create user account|
|/user/login|Login user
|/user/:id|Get user by ID|
|/user/:id/post|Get user Posts|
|/user/:id/comment|Get user comments|
|/r|Get all subreddits|
|/r/:id|Get subreddit by ID|
|/post/create|Create new post|
|/post/:id|Get post by ID|
|/post/:id/delete|Delete Post|
|/comment|Create new comment|
|/comment/:id|Get comment by ID|
|/comment/:id/delete|Delete Comment|
