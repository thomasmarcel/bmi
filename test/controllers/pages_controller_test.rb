require 'test_helper'

class PagesControllerTest < ActionController::TestCase
# class PagesControllerTest < ActionDispatch::IntegrationTest

  include Devise::Test::ControllerHelpers

  # test "the truth" do
  #   assert true
  # end

  setup do
    @user = users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get home" do
    sign_in @user
    get :home
    assert_response :success
  end
end
