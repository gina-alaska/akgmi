class Theme < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.V_MAP_INDEX_THEMES'
  set_primary_key 'theme_id'

  belongs_to :parent, :class_name => 'Theme', :foreign_key => 'parent_theme_id'
  has_many :children, :class_name => 'Theme', :foreign_key => 'parent_theme_id'

  scope :top, where("#{Theme.table_name}.parent_theme = ?", 'Map Index Keywords')

  def as_tree(opts = {})
    tree = { :text => self.theme_name }

    if self.children.empty?
      tree[:leaf] = true
      tree[:iconCls] = 'noicon'
    else
      tree[:leaf] = false
      tree[:children] = self.children.collect { |c| c.as_tree(opts) }
    end

    tree[:checked] = false if opts[:checked]
    
    tree
  end
end
