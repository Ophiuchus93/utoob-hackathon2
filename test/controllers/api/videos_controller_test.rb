require 'test_helper'

class Api::VideosControllerTest < ActionDispatch::IntegrationTest
  test "should get index," do
    get api_videos_index,_url
    assert_response :success
  end

  test "should get show," do
    get api_videos_show,_url
    assert_response :success
  end

  test "should get new," do
    get api_videos_new,_url
    assert_response :success
  end

  test "should get delete" do
    get api_videos_delete_url
    assert_response :success
  end

end
