json.extract! @quote, :id, :body, :description, :tags
json.tags do
  json.array!(@quote.tags) do |tag|
    json.extract! tag, :name
  end
end
