class AddVidLinkToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :vid_link, :string
  end
end
