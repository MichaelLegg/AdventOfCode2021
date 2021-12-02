
data = []
with open('d1/input.txt', 'r') as f:
  data = list(map(int, f.readlines()))

inc_count = 0

window = []
last_sum = 0

data_len = len(data)

for i in range(data_len-2):
  window = [data[i], data[i+1], data[i+2]]
  window_sum = sum(window)
  print(i, window, window_sum)

  if window_sum > last_sum:
    inc_count += 1

  last_sum = window_sum

print(inc_count-1)
