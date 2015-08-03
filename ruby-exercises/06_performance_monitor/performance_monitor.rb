def measure(n = 1)
  start_time = Time.now
  n.times do 
    yield
  end
  end_time = Time.now
  time_elapsed = end_time - start_time
  avg_time = time_elapsed/n
end