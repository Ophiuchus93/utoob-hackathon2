require 'test_helper'

class Api::CommentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index," do
    get api_comments_index,_url
    assert_response :success
  end

  test "should get show," do
    get api_comments_show,_url
    assert_response :success
  end

  test "should get create," do
    get api_comments_create,_url
    assert_response :success
  end

  test "should get update," do
    get api_comments_update,_url
    assert_response :success
  end

  test "should get destroy" do
    get api_comments_destroy_url
    assert_response :success
  end

end
