# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bid.delete_all
Auction.delete_all
User.delete_all

PASSWORD = "12345" 
admin = { first_name: "Ayaka", last_name: "f", password: PASSWORD, email: "ayaka@c.c" }
User.create(admin)


10.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
    first_name: first_name, 
    last_name: last_name, 
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
    )
end

users = User.all
puts Cowsay.say("Created #{users.count} users", :tux)


200.times do
    user = users.sample
    a = Auction.create(
        title: Faker::Hacker.say_something_smart,
        description: Faker::ChuckNorris.fact,
        price: Faker::Number.decimal(l_digits: 3, r_digits: 1),
        ends_at: Faker::Date.backward(days:365 * 5),
        created_at: Faker::Date.backward(days:365 * 5),
        updated_at: Faker::Date.backward(days:365 * 5),
        user_id: user.id
    )
    if a.valid?
        a.bids = rand(0..15).times.map do
            Bid.new({
                price: Faker::Number.decimal(l_digits: 3, r_digits: 3), 
                user_id: user.id
            })
        end
    end
end

puts Cowsay.say("Generated #{Auction.count} Auctions", :frogs)
puts Cowsay.say("Generated #{Bid.count} Bids", :ghostbusters)
