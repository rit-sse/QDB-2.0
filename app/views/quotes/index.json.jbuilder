json.array!(@quotes) do |quote|
  json.extract! quote, :id, :body, :description
  json.tags do
    json.array!(quote.tags.uniq) do |tag|
      json.extract! tag, :name
    end
  end
end
