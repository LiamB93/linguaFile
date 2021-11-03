# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Language.destroy_all
Word.destroy_all
User.destroy_all

@liam = User.create!(username: 'Liam', email: 'lmpbaker93@gmail.com', password: '123456')

puts "#{User.count} users created"

@spanish = Language.create!(name: 'spanish')

puts "#{Language.count} languages created"

@computadora = Word.create!(term: 'computadora', example: 'El MacBook es un tipo de computadora', img_url:'https://freesvg.org/img/1545450625.png', translation: 'computer', user: @liam)

puts "#{Word.count} words  created"