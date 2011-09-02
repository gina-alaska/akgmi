class Keyword < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.V_PUBS_KEYWORD_SEARCH'

  def self.citation_ids_for(mode, items)
    search_terms = items.collect(&:downcase)
    search = self.select('DISTINCT CITATION_ID')

    case mode.to_sym
      when :any
        search = search.where('LOWER(KEYWORD) IN (?)', search_terms)
      when :all
        first = items.shift
        search = search.where('LOWER(KEYWORD) LIKE LOWER(?)', first)
        subquery = Keyword.select('CITATION_ID')
        items.each do |item|
          search = search.where(
            'CITATION_ID IN (' +
              subquery.where('LOWER(KEYWORD) LIKE LOWER(?)', "%#{item}%").to_sql +
            ')'
          )
        end
    end
    search.collect(&:citation_id)
  end

  def self.citations_for(items)
    Publication.active.where('citation_id IN ?', citation_ids_for(items))
  end
end
