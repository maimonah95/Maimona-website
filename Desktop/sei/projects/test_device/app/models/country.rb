class Country
    include HTTParty
    base_uri 'https://api.covid19api.com/summary'
    format :json

    # def self.for term 
    #      get ("", query: {query: term })["elements"]
end