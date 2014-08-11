json.quotes do
  json.array!(@quotes) do |quote|
    json.extract! quote, :id, :body, :description
    json.tags do
      json.array!(quote.tags.uniq) do |tag|
        json.extract! tag, :name
      end
    end
  end
end
json.last_page @quotes.last_page?
json.first_page @quotes.first_page?
