json.array!(@quotes) do |quote|
  json.extract! quote, :id, :body, :description, :approved, :deleted, :flagged
  json.url quote_url(quote, format: :json)
end
