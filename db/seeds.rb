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
@italian = Language.create!(name: 'italian')
@portuguese = Language.create!(name: 'portuguese')

puts "#{Language.count} languages created"

@computadora = Word.create!(term: 'computadora', example: 'El MacBook es un tipo de computadora', img_url:'https://freesvg.org/img/1545450625.png', translation: 'computer', user: @liam)
@riqueza = Word.create!(term: 'riqueza', example: 'La riqueza no da la felicidad', img_url: 'https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/a-wealth-of-words-croesus-1233@1x.jpg', translation: 'wealth', user: @liam)
@sinceridad = Word.create!(term: 'sinceridad', example: 'Con toda sinceridad, no te creo', img_url: 'https://image.shutterstock.com/image-photo/oath-260nw-746355157.jpg', translation: 'Sincerity', user: @liam)
@lluvia = Word.create!(term: 'lluvia', example: 'No se puede jugar con la lluvia', img_url: 'https://upload.wikimedia.org/wikipedia/commons/4/46/A_man_walks_through_heavy_rain_under_an_umbrella_in_Kigali%2C_Rwanda._Emmanuel_Kwizera.jpg', translation: 'to establish', user: @liam)
@piatto = Word.create!(term: 'piatto', example: 'Tu metti i piatti sulla tavola', img_url: 'https://cdn.pixabay.com/photo/2019/03/04/17/19/plate-4034728_1280.png', translation: 'plate', user: @liam)
@formaggio = Word.create!(term: 'formaggio', example: 'A Paolo non piace mangiare formaggio', img_url: 'https://live.staticflickr.com/65535/49582376993_75772ee54a_b.jpg', translation: 'cheese', user: @liam)
@zia = Word.create!(term: 'zia', example: 'È la mia zia preferita', img_url: 'https://cf.ltkcdn.net/family/images/orig/267054-2119x1413-aunt-and-nice.jpg', translation: 'aunt', user: @liam)
@macchina = Word.create!(term: 'macchina', example: 'La Ferrari è una macchina italiana', img_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Old_car.jpg', translation: 'car', user: @liam)
@sotaque = Word.create!(term: 'sotaque', example: 'Ele tem um sotaque brasiliero', img_url: 'https://images.theconversation.com/files/299060/original/file-20191028-113998-n5x28f.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop', translation: 'accent', user: @liam)
@devagar = Word.create!(term: 'devagar', example: 'A bicicleta dele é devagar', img_url: 'https://cdn.pixabay.com/photo/2014/06/14/12/47/snail-368763_1280.jpg', translation: 'slow', user: @liam)
@coragem = Word.create!(term: 'coragem', example: 'Tem que ter coragem para mudar de carreira', img_url: 'https://static.wikia.nocookie.net/courage/images/4/46/New_Courage.png/revision/latest?cb=20200912151506', translation: 'courage', user: @liam)
@formiga = Word.create!(term: 'formiga', example: 'As formigas são muito pequenas', img_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Black-ants.jpg', translation: 'ant', user: @liam)

puts "#{Word.count} words  created"

# Word.all.each do |word|
# end

@computadora.languages << @spanish
@riqueza.languages << @spanish
@sinceridad.languages << @spanish
@lluvia.languages << @spanish

@piatto.languages << @italian
@formaggio.languages << @italian
@zia.languages << @italian
@macchina.languages << @italian

@sotaque.languages << @portuguese
@devagar.languages << @portuguese
@coragem.languages << @portuguese
@formiga.languages << @portuguese

