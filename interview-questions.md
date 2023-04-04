# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key would be known as the primary key on the Cohort Model and when inserted into the student model will act as a foreign key (relating the data between the two models together) This mistake can be fixed by updating the student model to include a new column named after the primary key column in the Cohort model since that is the original database model that holds the starting information. 

Researched answer: Primary keys are unique identifiers they also help to identify specific records without allowing duplications, They are usually number based such as driver's license number or customer ID numbers. The foreign key's purpose is to link the two tables together (there can be more than one and they can also be null) the link between a foreign key column and another tables linked column cannot be destroyed due to constraints placed on the foreign key by the system.

2. Which RESTful routes must always be passed params? Why?

Your answer: I believe Update, edit, show and Destroy( otherwise known as patch, Get, delete ) because they will rely on the params passed to know where they need to make the changes to your application. The params give those routes a specific destination to act upon so there is no miscommunication on the data changes are being made to. 

Researched answer: Params add information to a url, allowing you to store data. You can input different values and still execute a query based on the param placeholder. The RESTful routes Update, Edit, Show, and Destroy need a param to link the applications url to different actions and pages on the application while enabling different inputs to be added to request different information.

3. Name three rails generator commands. What is created by each?

Your answer: rails g model (which will create a new model) rails g resource (which will create a backend resource database) rails g controller These are the only two I currently know

Researched answer: The Rails G resource command will generate a resource database that you can essentially set up the same as a model but will create a resource routes, empty view folder and a controller.

- Rails G Model - will create a migration, a model and and tests for the files generated
- Rails G Controller - will generate methoda you would want your controller to have but will also create views for each method you input automatically 
- Raild G -h - will generate a list of helpful commands, syntax and options that are available to the user (Super helpful never knew about this one)
- Rails destroy - will run similarly to the other generate commands except instead og creating files it will remove them from every path

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students = def index Takes you to a view page for students

action: "POST" location: /students = def create - will alow you to create a student in the application

action: "GET" location: /students/new = def new - will take you to a view page for the creation of a new student (GET Read Command will show you the information on the page)

action: "GET" location: /students/2 = def show - most likely will have a .find(params[:id]) and will take you to view a page with student id:2 information.

action: "GET" location: /students/2/edit = def edit - will take you to a view page for editing student with id:2's information. (This is a put action I believe) 

action: "PATCH" location: /students/2 = def update - this will allow you to submit updated changes from editing student with id:2's information

action: "DELETE" location: /students/2 = def destroy - Will delete the information of student at id:2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1 - As a CEO of a new start-up company for finding online deals, I want  an easy to use GUI, tso that it allows our members to easily navigate our application and find the deals that fit their shopping needs.

2 - As a lawfirm manager, I would like our companies online filing system to be dynamic allowing us to store thousands of files for our clients in specific and easily findable folders in a cloud based application.

3 - As a Veteran Agency, I would like to have a website friendly to senior citizens, so that they can get updates about our benefits programs more conveniently.

4 - As Tom, I would like to be able to be able to upload ideas for my book into a workspace that can be accessible anywhere so I can continue where I stopped while on the go.

5- As a travel agent I would like to be able to compare multiple rates together at a single time, so that I can find the best deals for my clients.

6 - As a professional photographer I would like to be able to arrange many different portfolios of my work within a single app, so that I can customize them for different potential clients

7 - As a musician I would like to be able to make changes to songs I am working on from my phone, so that when I am not able to work in the studio I can still get some work done.

8- As a soda company CEO I would like to be able to organize the recipe for different flavors into a safe dynamic file sharing system, so that I can pass updates to my co-workers

9- As a school teacher I would like to be able to show parents how well their children did in class today from an online forum, so that we can reach out to more than one parent at a time and need less face to face encounters.

10 - As a developer I want to learn the most effecient tactics in coding, so that I can code with ease and show potential employers my skills.
