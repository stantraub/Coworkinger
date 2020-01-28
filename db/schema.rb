# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_28_194340) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "spaces", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zipcode", null: false
    t.text "description", null: false
    t.string "email", null: false
    t.string "phone", null: false
    t.string "website"
    t.integer "cost", null: false
    t.string "open_hour", null: false
    t.string "closing_hour", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "neighborhood"
    t.integer "office_capacity"
    t.integer "people_capacity"
    t.boolean "availability"
    t.boolean "desk_day"
    t.integer "shared_desk"
    t.integer "meeting_rooms"
    t.boolean "hours_24_access"
    t.integer "transit_station_miles"
    t.boolean "wellness_room"
    t.integer "phone_booths"
    t.boolean "event_space"
    t.boolean "bike_parking"
    t.boolean "pet_friendly"
    t.boolean "snacks_drinks_included"
    t.boolean "tea_coffee_included"
    t.boolean "ping_pong"
    t.boolean "billiards"
    t.boolean "foosball"
    t.boolean "showers"
    t.boolean "onsite_gym"
    t.boolean "printers_included"
    t.boolean "bocce_ball"
    t.integer "parking"
    t.boolean "nap_room"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
