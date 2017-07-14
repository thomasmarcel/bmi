require 'test_helper'

class UserFlowsTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end

  fixtures :users

  include Devise::Test::IntegrationHelpers

  setup do
    @user = users(:one)
  end

  test "should get home" do
    sign_in @user
    get home_path
    assert_response :success
  end

  test "should redirect to login" do
    sign_out @user
    get home_path
    assert_response :redirect
  end

  test "should destroy session and redirect to root path" do
    sign_in @user
    get home_path
    delete destroy_user_session_path

    assert_redirected_to root_path
  end
end
