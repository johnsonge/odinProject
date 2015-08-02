def echo(msg)
  msg
end

def shout(msg)
  msg.upcase
end

def repeat(msg, num = 2)
  msg = num.times.collect { msg }.join(' ')
end

def start_of_word(msg, num)
  msg[0..num - 1]
end

def first_word(msg)
  msg = msg.split
  msg[0]
end

def titleize(msg)
  little_words = ['a','and','an','in','at','for','on','over','the','then','than','with']
  msg = msg.split.each { |word| word.capitalize! unless little_words.include?(word)}
  msg[0].capitalize!
  msg = msg.join(' ')
end