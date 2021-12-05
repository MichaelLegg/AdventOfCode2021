
data = []
with open('d1/input.txt', 'r') as f:
  data = list(map(int, f.readlines()))
data_len = len(data)

p1_result = 0
p2_result = 0

window = []

last_data = 0
last_window_sum = 0

for i in range(data_len):

  # current sample more than last
  if data[i] > last_data:
    p1_result += 1

  last_data = data[i]

  # part 2
  # first window has no previous, so skip
  if i == 0:
    continue

  # only run on complete windows
  if i > (data_len - 3):
    break

  # create window and sum
  window = [data[i], data[i+1], data[i+2]]
  window_sum = sum(window)
  print(i, window, window_sum)

  # current window sum more than previous window sum
  if window_sum > last_window_sum:
    p2_result += 1

  last_window_sum = window_sum

print(p1_result)
print(p2_result)
