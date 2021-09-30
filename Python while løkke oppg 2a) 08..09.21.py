
v_0 = 3
a = 2
t = 0
s = 0

t_slutt = 4
dt = 0.1


while t < t_slutt:
    s = s + v_0 * dt 
    v_0 = v_0 + a * dt
    t = t + dt
    
    
s=round(s)
print("posisjonen er s =", s, "m")
    

