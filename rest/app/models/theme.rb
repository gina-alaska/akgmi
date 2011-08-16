class Theme < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.V_MAP_INDEX_THEMES'
  set_primary_key 'theme_id'

  belongs_to :parent, :class_name => 'Theme', :foreign_key => 'parent_theme_id'
end
