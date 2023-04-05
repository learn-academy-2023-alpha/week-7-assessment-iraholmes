# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is the inital page set up that all the other routes and pages will be linked to, allowing a user to submit a request on the page (index aka "landing page") the views and models will be synced to this initial set up. Index is the method being.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # @posts is the instance variable that will be called on to signal an action BlogPost.all will show all posts made on the landing page when requested. it will run a READ Action
    @posts = BlogPost.all
  end
  # ---3)
  # This show action will also be a READ action that needs a prameter in this case "id" that can be called and it will show the information saved to the ID number being called. If ID 2 is requested in the url then the information at that level will be shown.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # the new method creates a view for the ability to create a new blog post but does not give the functionality to actually save the new post just yet, more like a placeholder until further steps are completed. 
  def new
    @post = BlogPost.new
  end
  def create
    # ---5)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end
# This allows the user to actually create a new blog post if the post is deemed valid and will re-direct the user back to the blog posts main page if the input is accepted. the blog_post_params will require the post to include the parameters set for the model when it was created. 
  def edit

    # ---6)
    @post = BlogPost.find(params[:id])
  end
# Edit method will allow the user to make a change to a blog post that is displayed on the screen. the id params will allow them to select a specific post based on it's ID and edit that post on an edit view page. 
  
  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end
  # The update method will allow you to save the changes made thanks to the edit method. saves the changes while only updating the selected blog post ID, the @post.update(blog_post_params) allows the parameters to be updated in the application. @post.valid? will then redirect the user to the blog posts main page should the edit input be valid and accepted by the application.
  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path
    end
  end
# Destroy will delete the selected post at the id parameter, the .find(params[:id]) will take the user to a view page for that id where deletion can be completed. if the post is confirmed to be destroyed the user will be redirected to the main blog posts page and the blog selected will have been deleted. 
  # ---9)
  private
  # Private is set for parameter methods to stop them from being shown to the user, keeping the inner workings of what is going on in the application behind the scenes so to speak. Allowing other methods to use the params method but not k=showing the whole process when they are called on.
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content)
  end
end
# this method is making parameters a requirement of blog_post if that is not satisfied then the application will show an error. permit is allowing the keys title and content to be used as parameters when creating, updating, or editing a blog post otherwise there will be an error.

# In case I left something out. the index, show, Edit, and New, methods are all used to show on a view that is navigated to when the user is requesting a specific ID for one of the model values.  