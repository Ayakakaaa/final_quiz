# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

PASSWORD = "12345" 
admin = { first_name: "Ayaka", last_name: "f", password: PASSWORD, email: "ayaka@c.c" }
User.create(admin)

puts Cowsay.say("Login with #{admin.email} and password of '#{PASSWORD}'", :cow)