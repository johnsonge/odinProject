def translate(word)
  vowels = ['a','e','i','o','u']
  phenome = 'qu'
  pig_latin = []

  word.split(' ').each do |word|
    while not vowels.include? word[0]
      if word.start_with? (phenome)
        word = word[2..-1] + word[0..1]
      else
        word = word[1..-1] + word[0]
      end
    end
    word << "ay"
    pig_latin.push word
  end
  pig_latin*' '
end