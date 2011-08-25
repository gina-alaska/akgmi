class Array
  def as_tree(opts={})
    collect { |c| c.as_tree(opts) }
  end
end