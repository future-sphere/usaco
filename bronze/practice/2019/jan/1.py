def solution(n, swaps):
  highest = 0
  for i in range(3):
    score = 0
    placement = i
    for j in range(n):
      if swaps[i][0] - 1 == placement:
        placement = swaps[i][1] - 1
      elif swaps[i][1] - 1 == placement:
        placement = swaps[i][0] - 1
      
      if placement == swaps[i][2] - 1:
        score += 1
    
      if score > highest:
        highest = score
  
  return highest

print(solution(3, [
    [1, 2, 1],
    [3, 2, 1],
    [1, 3, 1],
  ]))