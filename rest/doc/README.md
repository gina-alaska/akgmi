API Documentation
=================

Publication search API

URL: /publications{.format}{?PARAMS}

PARAMS:

      format         : Controls the output format returned from the REST API. Can be either js(jsonp), json or pdf (default: js)
      keyword        : space seperated list of keywords to search for in authors, title or keywords fields
      themes         : id of the theme from DGGS_PUBLICATIONS.V_MAP_INDEX_THEMES
      quadrangles[]  : list of quadrangle ids from DGGS_PUBLICATIONS.PUB_ITEM_QUADS_XRC
      agency         : searches agency name
      year_from      : searches publication year (format: YYYY)
      year_to        : searches publication year (format: YYYY)
      scale_from     : searches map_scale_denominator <= [VALUE] in DGGS_PUBLICATIONS.V_MAP_INDEX_OUTLINES
      scale_to       : searches map_scale_denominator >= [VALUE] in DGGS_PUBLICATIONS.V_MAP_INDEX_OUTLINES
      statewide      : if value == 'on' all publications regardless of the outline source are returned.  
                       Otherwise will only return publications with an outline source of 'Map Extent' and 'Map Outline'
      aoi            : WKT for AOI search must be in Alaskan Albers (EPSG:3338) projection.
      selected       : list of publication citation_ids, will always include these publications in results 
                       returned regardless of the above search params
      selected_only  : if given then the search params are ignored and only the list of ids from selected are used for the search
      sort           : sort results by the given field name