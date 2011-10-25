class Keyword < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.V_PUBS_KEYWORD_SEARCH'

  def self.sanitize(items)
    items.collect(&:upcase)
  end

  def self.subquery(mode, items)
    search_terms = sanitize(items)
    search = self.select('DISTINCT CITATION_ID')

    case mode.to_sym
      when :any
        search = search.where('KEYWORD_UPPERCASE IN (?)', search_terms)
      when :all
        first = search_terms.shift
        search = search.where('KEYWORD_UPPERCASE LIKE (?)', "%#{first}%")
        
        subquery = Keyword.select('CITATION_ID')
        search_terms.each do |item|
          search = search.where(
            'CITATION_ID IN (' +
              subquery.where('KEYWORD_UPPERCASE LIKE (?)', "%#{item}%").to_sql +
            ')'
          )
        end
    end
    search.to_sql
  end
end
