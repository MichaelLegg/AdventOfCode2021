
data = []
with open('d2/input.txt', 'r') as f:
  data = list(map(lambda a: a.strip(), f.readlines()))
data_len = len(data)

def p1(data):
  pos_h = 0
  pos_d = 0

  for line in data:
    cmd,v = line.split(' ')
    v = int(v)
    if cmd == 'forward':
      pos_h += v
    elif cmd == 'down':
      pos_d += v
    elif cmd == 'up':
      pos_d -= v

  return pos_h * pos_d

def p2(data):
  pos_h = 0
  pos_d = 0
  aim = 0

  for line in data:
    cmd,v = line.split(' ')
    v = int(v)
    if cmd == 'forward':
      pos_h += v
      pos_d += aim * v
    elif cmd == 'down':
      aim += v
    elif cmd == 'up':
      aim -= v

  return pos_h * pos_d

print(p1(data))
print(p2(data))
