class QuadrangleSearch < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.PUB_ITEM_QUADS_XRC'

  def self.subquery(mode, search_terms)
    field = 'QUAD_NUMBER_DGGS'
    search = self.select('DISTINCT CITATION_ID')

    case mode.to_sym
      when :any
        search = search.where("#{field} IN (?)", search_terms)
      when :all
        first = search_terms.shift
        search = search.where("#{field} = ?", first)
        
        query = Keyword.select('CITATION_ID')
        search_terms.each do |item|
          search = search.where(
            'CITATION_ID IN (' +
              query.where("#{field} = ?", item).to_sql +
            ')'
          )
        end
    end
    search.to_sql
  end
end
