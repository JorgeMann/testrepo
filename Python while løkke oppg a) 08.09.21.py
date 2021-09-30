 
s = 0
t = 0
v = 3


t_slutt = 4
dt = 0.1


while t < t_slutt:
    s = v * dt + s
    t = t + dt
    
s=round(s)
print("posisjonen er s =", s, "m")





