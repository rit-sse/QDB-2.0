module ApplicationHelper
  def html_import_tag(path)
    tag_options = { rel: 'import', href: "qdb/assets/#{path}.html" }.stringify_keys
    tag(:link, tag_options ).html_safe
  end
end
