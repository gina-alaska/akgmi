#<Publication
#   citation_id: 4262,
#   publication_number: "P 424-D",
#   authors: "Bergquist, H.R.",
#   title: "Early Cretaceous (middle Neocomian) microfossils in...",
#   quadrangles: "Talkeetna Mountains",
#   keywords: nil,
#   publication_year: "1961",
#   publisher: "USGS",
#   biblio_ref_short: "Bergquist, H.R., 1961, Early Cretaceous (middle Neo...",
#   biblio_ref_long: "Bergquist, H.R., 1961, Early Cretaceous (middle Neo...",
#   map: "N",
#   report: "N",
#   disk: "N",
#   geospatial_data: "N",
#   outside_link: "N",
#   sort_pub_series: "P",
#   sort_pub_year: nil,
#   sort_pub_num_1: "00000000000000000424",
#   sort_pub_num_2: nil,
#   sort_pub_letter: "D"
#>


class Publication < ActiveRecord::Base
  set_table_name 'DGGS_PUBLICATIONS.V_MAP_INDEX_PUBLICATIONS'
  set_primary_key 'citation_id'

  has_one :outline, :foreign_key => 'citation_id'


  scope :active, includes(:outline).where("#{Outline.table_name}.CITATION_ID IS NOT NULL")
end
