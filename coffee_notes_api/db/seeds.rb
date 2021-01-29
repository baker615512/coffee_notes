# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Country.create(name: "Colombia", image: "https://coffeenotes.s3.us-east-2.amazonaws.com/CO-EPS-02-0003.png")
Country.create(name: "Costa Rica", image: "https://coffeenotes.s3.us-east-2.amazonaws.com/CR-EPS-02-0003.png")
Country.create(name: "Guatemala", image: "https://coffeenotes.s3.us-east-2.amazonaws.com/GT-EPS-02-0003.png")
Country.create(name: "Indonesia", image: "https://coffeenotes.s3.us-east-2.amazonaws.com/ID-EPS-02-0003.png")
Country.create(name: "Kenya", image: "https://coffeenotes.s3.us-east-2.amazonaws.com/KE-EPS-02-0003.png")

Flavor.create(name: "Caramel")
Flavor.create(name: "Dark Chocolate")
Flavor.create(name: "Nutty")
Flavor.create(name: "Milk Chocolate")
Flavor.create(name: "Spice")
Flavor.create(name: "Woody")
Flavor.create(name: "Floral")

Profile.create(votes: 10, country_id: 1, flavor_id: 1)