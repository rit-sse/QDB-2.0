xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "SSE QDB"
    xml.description "The quote database for the SSE"
    xml.link "https://sse.se.rit.edu/qdb"
    xml.image do
      xml.url "http://sse.se.rit.edu/qdb/assets/favicon.ico"
    end

    @quotes.each do |quote|
      xml.item do
        xml.title "Quote ##{quote.id}"
        xml.description do
          xml.html do |data|
            data << (render :partial => "quotes/quote_rss.html.slim", :locals => {:quote => quote})
          end
        end
        xml.pubDate quote.created_at.to_s(:rfc822)
        xml.link "http://sse.se.rit.edu/qdb/quotes/#{quote.id}"
        xml.guid "http://sse.se.rit.edu/qdb/quotes/#{quote.id}"
      end
    end
  end
end
