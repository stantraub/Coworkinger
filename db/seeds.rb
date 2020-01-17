require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
    Space.destroy_all

    shared = Space.create!({name: "Shared", address: "739 Bryant St", city: "San Francisco", state: "CA", zipcode: 94107, phone: "415-317-5905", description: "SHARED is a space that houses a community of creative people who value sharing.", email: "membership@shared-sf.com", parking: "No", wifi_included: true, website: "http://www.shared-sf.com/", cost: 275, open_hour: "6am", closing_hour: "2am"})
    shared_main_pic = open("https://coworking-dev.s3-us-west-1.amazonaws.com/Shared_space_main_pic.jpg")
    shared.main_pic.attach(io: shared_main_pic, filename: 'Shared_space_main_pic.jpg')

    bespoke = Space.create!({name: "Bespoke", address: "845 Market St Suite 45", city: "San Francisco", state: "CA", zipcode: 94103, phone: "(415) 964-4815", description: "Bespoke is a collection of tech-forward spaces, tailored for in-person inspiration.", email: "contact@bespokesf.co", parking: "Yes", wifi_included: true, website: "https://bespokesf.co/", cost: 416, open_hour: "9am", closing_hour: "6pm"})
    bespoke_main_pic = open("https://coworking-dev.s3-us-west-1.amazonaws.com/Bespoke_main_pic.jpg")
    bespoke.main_pic.attach(io: bespoke_main_pic, filename: 'Bespoke_main_pic.jpg')
end