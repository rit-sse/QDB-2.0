FactoryGirl.define do
  factory :approved_quote, class: Quote do
    body "[person]: quote"
    description "it's a quote"
    approved true
    tag_list "tags are cool"
  end

  factory :unapproved_quote, class: Quote do
    body "[person]: another quote"
    description "it's totes a quote"
    approved nil
    tag_list "tags are super lame"
  end

  factory :denied_quote, class: Quote do
    body "[person]: bad quote"
    description "it's not a quote"
    approved false
    tag_list "bad tags"
  end
end
