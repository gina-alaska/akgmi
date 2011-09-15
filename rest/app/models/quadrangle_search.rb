class QuadrangleSearch < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.PUB_ITEM_QUADS_XRC'

  def self.sanitize(items)
    items.collect(&:to_i)
  end

  def self.find_by_quad(mode, items)
    search_terms = sanitize(items)
    field = 'QUAD_NUMBER_DGGS'
    search = self.select('DISTINCT CITATION_ID')

    case mode.to_sym
      when :any
        search = search.where("CITATION_ID IN (?)", search_terms)
      when :all
        query = QuadrangleSearch.select("DISTINCT CITATION_ID")
        search_terms.each do |item|
          next if item.nil? or item == 0
          sql = query.where("#{field} = ?", item).to_sql
          search = search.where("CITATION_ID IN (#{sql})")
        end
    end

    search
  end

  def self.subquery(mode, search_terms)
    find_by_quad(mode, search_terms).to_sql
  end
end
