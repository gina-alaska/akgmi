class Keyword < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.V_PUBS_KEYWORD_SEARCH'

  def self.sanitize(items)
    items.collect(&:upcase)
  end

  def self.theme_subquery(items)
    search_terms = sanitize(items)
    search = self.select('DISTINCT CITATION_ID')
    #first = search_terms.shift
    #search = search.where('KEYWORD_UPPERCASE = ?', first)
    
=begin 
    sq = Keyword.select('CITATION_ID')
    search_terms.each do |item|
      search = search.where(
        'CITATION_ID IN (' +
          sq.where('KEYWORD_UPPERCASE = ?', item).to_sql +
        ')'
      )
    end
    search.to_sql
=end
    clauses = []
    words = []
    search_terms.each do |word|
      clauses << "KEYWORD_UPPERCASE = ?"
      words << word
    end
    search.where(clauses.join(' OR '), *words).to_sql
  end

  def self.subquery(items)
    search_terms = sanitize(items)
    search = self.select('DISTINCT CITATION_ID')

    first = search_terms.shift
    search = search.where('KEYWORD_UPPERCASE LIKE (?)', "%#{first}%")
        
    sq = Keyword.select('CITATION_ID')
    search_terms.each do |item|
      search = search.where(
        'CITATION_ID IN (' +
          sq.where('KEYWORD_UPPERCASE LIKE (?)', "%#{item}%").to_sql +
        ')'
      )
    end
    search.to_sql
  end
end
