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

    bespoke_pic_1 = open("https://coworking-dev.s3-us-west-1.amazonaws.com/bespoke_pic_1.png")
    bespoke.space_pics.attach(io: bespoke_pic_1, filename: 'bespoke_pic_1.png')

    bespoke_pic_2 = open("https://coworking-dev.s3-us-west-1.amazonaws.com/bespoke_pic_2.jpg")
    bespoke.space_pics.attach(io: bespoke_pic_2, filename: 'bespoke_pic_2.jpg')

    bespoke_pic_3 = open("https://coworking-dev.s3-us-west-1.amazonaws.com/bespoke_pic_3.jpg")
    bespoke.space_pics.attach(io: bespoke_pic_3, filename: 'bespoke_pic_3.jpg')

    bespoke_pic_4 = open("https://coworking-dev.s3-us-west-1.amazonaws.com/bespoke_pic_4.jpg")
    bespoke.space_pics.attach(io: bespoke_pic_4, filename: 'bespoke_pic_4.jpg')
    

    assembly = Space.create!({name: "The Assembly", address: "449 14th St., Mission District", city: "San Francisco", state: "CA", zipcode: 94103, phone: "‭(415) 868-3322‬", description: "The Assembly is a wellbeing club that makes people feel good with exceptional workouts, wellness, food, community, and connection.", email: "aloha@theassembly.com", parking: "Yes", wifi_included: true, website: "https://www.theassembly.com/", cost: 250, open_hour: "8am", closing_hour: "8pm"})
    assembly_main_pic = open("https://coworking-dev.s3-us-west-1.amazonaws.com/assembly_main_pic.jpg")
    assembly.main_pic.attach(io: assembly_main_pic, filename: 'assembly_main_pic.jpg')

    covo = Space.create!({name: "Covo SF", address: "981 Mission Street", city: "San Francisco", state: "CA", zipcode: 94103, phone: "(415) 886-6206", description: "Covo is the first coworking space that enhances how you live, not just how you work. It's wonderful coworking, wrapped around a terrific coffee shop, café, and tap room. Covo pushes coworking further, with the goal of creating a space you'll be proud to call home.", email: "N/A", parking: "No", wifi_included: true, website: "https://sf.hellocovo.com/", cost: 560, open_hour: "8am", closing_hour: "5pm"})
    covo_main_pic = open("https://coworking-dev.s3-us-west-1.amazonaws.com/covo_main_pic.jpeg")
    covo.main_pic.attach(io: covo_main_pic, filename: 'covo_main_pic.jpeg')

    wing = Space.create!({name: "The Wing", address: "115 Sansome St Suite #200", city: "San Francisco", state: "CA", zipcode: 94104, phone: "N/A", description: "A haven in the Financial District, our first West Coast Wing features a café with local flavors, an idyllic beauty room, and sun-drenched corners. We recently doubled in size, adding a fitness room, dedicated event space, and more room to spread out.", email: "sup@the-wing.com", parking: "Yes", wifi_included: true, website: "https://bespokesf.co/", cost: 185, open_hour: "8am", closing_hour: "9pm"})
    wing_main_pic = open("https://coworking-dev.s3-us-west-1.amazonaws.com/wing_main_pic.jpg")
    wing.main_pic.attach(io: wing_main_pic, filename: 'wing_main_pic.jpg')
end