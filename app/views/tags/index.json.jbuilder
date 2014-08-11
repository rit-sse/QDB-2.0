json.array!(@tags) do |tag|
  json.extract! tag, :name
end
