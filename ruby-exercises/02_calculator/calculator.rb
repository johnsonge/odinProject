def add(num1,num2)
  num1 + num2
end

def subtract(num1,num2)
  num1 - num2
end  

def sum(array)
  array.inject(0) {|sum,x| sum + x }
end

def multiply(*nums)
  nums.inject(:*)
end

def power(num1,num2)
  num1**num2
end

def factorial(num)
  if num == 0
    1
  else
  (1..num).inject(:*)
  end
end